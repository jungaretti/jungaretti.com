#!/bin/bash

set -e

account_name="jungaretti"
container_name="gallery"

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --account-name) account_name="$2"; shift ;;
        --container-name) container_name="$2"; shift ;;
        *) break ;;
    esac
    shift
done

function upload_to_azure {
    for file in "$@"; do
        local name="${file##*/}"
        az storage blob upload \
            --account-name "$account_name" \
            --container-name "$container_name" \
            --name "$name" \
            --file "$file" \
            --overwrite \
            --auth-mode login
    done
}

for file in "$@"; do
    base="${file%.*}"

    original="$base.jpg"
    echo "Converting: $file to $original"
    [ -e "$original" ] && echo "$original already exists" || magick convert "$file" -quality 60 "$jpg"

    echo "Uploading: $original"
    upload_to_azure "$original"

    preview="$base-preview.jpg"
    echo "Converting: $file to $jpg"
    [ -e "$preview" ] && echo "$preview already exists" || magick convert "$file" -quality 60 -resize 1600x1600 "$original"

    echo "Uploading: $preview"
    upload_to_azure "$preview"
done

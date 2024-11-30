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

for file in "$@"; do
    base="${file%.*}"

    original="$base.jpg"
    echo "Converting: $file to $original"
    [ -e "$original" ] && echo "$original already exists" || magick "$file" -quality 60 "$original"

    echo "Uploading: $original"
    az storage blob upload \
        --account-name "$account_name" \
        --container-name "$container_name" \
        --name "${original##*/}" \
        --file "$original" \
        --overwrite \
        --auth-mode login

    preview="$base-preview.jpg"
    echo "Converting: $file to $preview"
    [ -e "$preview" ] && echo "$preview already exists" || magick "$file" -quality 60 -resize 1600x1600 "$preview"

    echo "Uploading: $preview"
    az storage blob upload \
        --account-name "$account_name" \
        --container-name "$container_name" \
        --name "${preview##*/}" \
        --file "$preview" \
        --overwrite \
        --auth-mode login
done

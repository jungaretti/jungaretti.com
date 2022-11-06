#!/bin/bash

set -e

function upload_to_azure {
    local account_name="badger"
    local container_name="gallery"
    
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

function deploy_original {
    for file in "$@"; do
        local base="${file%.*}"

        local jpg="$base.jpg"
        echo "Converting: $file to $jpg"
        [ -e "$jpg" ] && echo "$jpg already exists" || convert "$file" -quality 60 "$jpg"

        echo "Uploading: $jpg"
        upload_to_azure "$jpg"
    done
}

function deploy_preview {
    for file in "$@"; do
        local base="${file%.*}"

        local jpg="$base-preview.jpg"
        echo "Converting: $file to $jpg"
        [ -e "$jpg" ] && echo "$jpg already exists" || convert "$file" -quality 60 -resize 1600x1600 "$jpg"

        echo "Uploading: $jpg"
        upload_to_azure "$jpg"
    done
}

az login
deploy_original "$@"
deploy_preview "$@"

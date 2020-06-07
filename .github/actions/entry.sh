#!/bin/bash
echo "Replacing ${GITHUB_REF}"

TAG=${GITHUB_REF/refs\/tags\//}

if [ -z "$TAG" ]; then
    echo "No tag found"
    exit 1
fi

if [ ! -d "$BUNDLE_LOCATION" ]; then
    echo "Directory dist DOES NOT exists."
    exit 1
fi

export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_KEY

aws s3 cp $BUNDLE_LOCATION s3://$BUCKET_NAME/production/$TAG/

echo "Finished CDN Deploy"
exit 0
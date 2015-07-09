#! /bin/bash

version=`grep '"version"' package.json | grep -o "[0-9]\.[0-9]\.[0-9]"`

git tag $version
git push --tags
docker build -t="bbsingular/collection-service:$version-seeded" .
docker push bbsingular/collection-service:$version-seeded

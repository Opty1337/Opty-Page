#!/usr/bin/env sh

# Abort on Errors
set -e
# Build
npm run build
# Navigate into the Build Output Directory
cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Opty1337/Opty1337.github.io.git master

cd -

#!/bin/sh

# Abort on Errors
set -e
# Build
npm run build
# Navigate into the Build Output Directory
cd dist

git init
git add -A
git commit -m "Portfolio Deploy"
git push -f git@github.com:RicardoGrade/RicardoGrade.github.io.git master

# Cleanup Build Output Directory
cd -
rm -rf dist

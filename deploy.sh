#!/bin/sh

npm version patch
npm run production
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
git tag $PACKAGE_VERSION
git add dist
git commit -m "bump version $PACKAGE_VERSION"
git push --tags
git subtree push --prefix dist origin gh-pages

#!/bin/sh

npm version patch --no-git-tag-version
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
npm run production
git add dist
git commit -m "bump version $PACKAGE_VERSION"
git tag $PACKAGE_VERSION
git push --tags
git subtree push --prefix dist origin gh-pages

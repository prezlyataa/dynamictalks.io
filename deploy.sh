#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
  npm version patch
  npm run productino
  PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
  git tag $PACKAGE_VERSION
  git add dist
  git commit -m "bump version $PACKAGE_VERSION"
  git push --tags
  git subtree push --prefix $1 origin gh-pages

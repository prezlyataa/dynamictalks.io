#!/bin/sh

npm run production
git add dist
npm version patch
git push --tags
git subtree push --prefix dist origin gh-pages

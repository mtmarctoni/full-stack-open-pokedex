#!/bin/bash

echo "Build script"

npm ci
# npm run eslint
npm run build
# npm run test
# npm run test:e2e
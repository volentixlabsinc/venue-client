#!/bin/bash

echo "hello, world!"

export BASE_URL="http://localhost:8000/api"
export BROWSER_BASED_URL="http://localhost:8000/api"
sed 's,BASE_URL,'$BASE_URL',; s,BROWSER_BASED_URL,'$BROWSER_BASED_URL',' venue/nuxt.config.js.template > venue/nuxt.config.js
#!/bin/bash
VERSION=`git rev-list HEAD --count`
JSONSTRING="this.version='3.$VERSION.0'"
STRING="30$VERSION"
echo $STRING > version.txt

echo "New VERSION: " $JSONSTRING
json -I -f package.json -e $JSONSTRING
json -I -f ./app/package.json -e $JSONSTRING

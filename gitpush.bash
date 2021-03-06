#!/bin/bash

# set -x #echo on
#
# Makes a git tag and git push
#
#

if (( $# != 2))
then
    printf "Arguments must be: 'tag' 'text'\n"
    exit 1
fi
git tag v"$1" -m "$2"
git push
git push --tags
exit 0

#!/bin/bash -x

if [[ "$TRAVIS_NODE_VERSION" == "6" || "$TRAVIS_NODE_VERSION" == "7" ]]
then
  sh -e /etc/init.d/xvfb start
  export DISPLAY=:99.0
fi

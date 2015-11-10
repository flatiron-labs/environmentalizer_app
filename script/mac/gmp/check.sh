#!/bin/bash -l

if [ -n "$(brew ls --versions gmp 2> /dev/null)" ]; then
  echo -n '1'
else
  echo -n '0'
fi

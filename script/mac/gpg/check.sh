#!/bin/bash -l

if [ -n "$(brew ls --versions gnupg 2> /dev/null)" ] && \
   [[ $(which gpg) =~ ^/usr/local/bin/gpg$ ]]
then
  echo -n '1'
else
  echo -n '0'
fi

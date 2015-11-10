#!/bin/bash -l

if [[ -f $HOME/.rvm/scripts/rvm ]]; then
  . $HOME/.rvm/scripts/rvm
fi

if [[ -n $(which rvm) ]] && \
   [[ -n $(rvm list | grep ruby) ]]
then
  echo -n '1'
else
  echo -n '0'
fi

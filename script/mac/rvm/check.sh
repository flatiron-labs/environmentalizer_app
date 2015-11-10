#!/bin/bash -l

if [[ -f $HOME/.rvm/scripts/rvm ]]; then
  . $HOME/.rvm/scripts/rvm

  rvm get head > /dev/null 2>&1
fi

if [[ -n "$(which rvm)" ]] && [[ -f "$HOME/.rvm/bin/rvm" ]]; then
  echo -n '1'
else
  echo -n '0'
fi

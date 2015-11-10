#!/bin/bash

echo 'Installing Ruby...'

if [[ -f $HOME/.rvm/scripts/rvm ]]; then
  . $HOME/.rvm/scripts/rvm
  rvm get head
fi

expect <<-DONE
set timeout 300
spawn rvm install ruby-2.2.3
expect -re "password required for"
send "$1\n"
expect eof
DONE

rvm use 2.2.3 --default

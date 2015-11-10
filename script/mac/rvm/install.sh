#!/bin/bash -l

brew upgrade gmp 2> /dev/null
brew unlink gnupg && brew link gnupg 1> /dev/null
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 2>/dev/null
\curl -sSL https://get.rvm.io | bash -s

if [[ -f $HOME/.rvm/scripts/rvm ]]; then
  . $HOME/.rvm/scripts/rvm
fi

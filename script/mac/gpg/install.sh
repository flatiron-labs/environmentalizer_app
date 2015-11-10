#!/bin/bash -l

brew install gnupg 2>/dev/null || brew update 1>&2 2>/dev/null && brew upgrade gnupg 2>/dev/null

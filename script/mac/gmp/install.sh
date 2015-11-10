#!/bin/bash -l

brew install gmp 2>/dev/null || brew update 1>&2 2>/dev/null && brew upgrade gmp 2>/dev/null

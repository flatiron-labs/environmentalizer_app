#!/bin/bash -l

brew install git 2>/dev/null || brew update 1>&2 2>/dev/null && brew upgrade git 2>/dev/null

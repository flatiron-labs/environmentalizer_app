#!/bin/bash -l

function are_command_line_tools_installed {
  xcode-select -p &>/dev/null
  rc=$?

  if [[ $rc != 0 ]]; then
    echo -n '0'
  else
    echo -n '1'
  fi
}

are_command_line_tools_installed

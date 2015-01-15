#!/bin/bash

sudo apt-get -y update
sudo apt-get -y upgrade

# Install necessary tools
sudo apt-get install tmux

# Install development tools
sudo apt-get install nodejs redis-server mongodb
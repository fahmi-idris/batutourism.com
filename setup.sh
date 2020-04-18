#!/bin/bash
INIT_PATH=$(pwd)

# Up gateway
cd "$INIT_PATH/einfahrt";
docker-compose up -d --build

# UP Users
cd "$INIT_PATH/verbraucher";
docker-compose up -d --build

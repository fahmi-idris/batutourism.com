#!/bin/bash
INIT_PATH=$(pwd)

# Up Gateway
cd "$INIT_PATH/einfart";
docker-compose up -d

# Up Booking
cd "$INIT_PATH/auftrag";
docker-compose up -d

# UP Master
cd "$INIT_PATH/meister";
docker-compose up -d

# UP Users
cd "$INIT_PATH/verbraucher";
docker-compose up -d

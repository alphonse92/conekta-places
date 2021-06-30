#!/bin/bash

sh reset.sh

cd lib
npm install
clear
echo "Lib module installed"
cd ../frontend
npm install
clear
echo "Frontend installed"
cd ../backend
npm install
clear
echo "Backend installed"

docker compose build mongo
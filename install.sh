#!/bin/bash

sh reset.sh

cd lib
npm install
clear
echo "Lib module installed"

cd ../language-lib
npm install
clear
echo "language-lib module installed"


cd ../conekta-country-address
npm install
clear
echo "conekta-country-address"

cd ../frontend
npm install
clear
echo "Frontend installed"

cd ../backend
npm install
clear
echo "Backend installed"

cd ../
docker compose build mongo
echo "Mongo built successfully"
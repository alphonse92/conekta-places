# Description

This app allows to mexican users to register their address as perfect as posible.

See the demo here: https://youtu.be/oa3ITyOyq_o

# Requeriments

1. docker
2. node v10.19.0 or greater
3. npm
4. If you dont have docker, then you will need a mongo database.
5. google maps key which allow  to use google places and google geocode

# Installations

## Windows 
If you are on windows environment. Please use the respective commands to install node dependencies in the next folders:

1. lib
2. frontend
3. backend

Also, at root run docker compose to build the service called `mongo`

## Linux / Mac

Just run `sudo sh install.sh`. It will do the job for you. (The power of unix)

# Configuration

## Frontend 

Inside `frontend/.env/` copy the file `.env.example` and create a new one called `.env.development` You will need to set the value of `REACT_APP_ENV_GOOGLE_API_KEY`. Dont worry about it, I'll provide this to you.

## Backend

Inside `backend/.env/` copy the file `.env.example` and create a new one called `.env.development`. You dont need to do anything there, the example file is properly configured to run it in development env.

# Starting the mongo database

At first, please allow to your docker engine to mount backend and mongo folders. Then run

`docker-compose up mongo`

If you already have a mongo database, you can point the api to that using the configuration files or docker compose envars.
# Starting the client

Open the  frontend folder and then run

`npm run start:dev`

# Starting the backend

`npm run start:dev`

# About this assessments:

In this assesment I want to show you my expertise in javascript development technologies.

I want to show you about me:

1. Using thirth party services and integrate it to a fully functional React component.
2. Using thirth party UI library to not spend time developing.
3. Abstraction. Reusing components such error components, the mexico address form and so on.
4. Sharing code between back and front. In this case I created a npm module called conekta-places-lib
5. Abstraction and modularization: take a look on backend server, controllers, service managers and routes. 
6. Multi language: conekta-places-lib features to manage multilanguage applications.
7. Context and sevices providers in the frontend:
   1. useConfiguration: hook to get the application configuration along the Frontend
   2. useService: hook to get the api services in any place of the frontend
   3. useLanguage:  hook which uses the conekta-places-lib module to provide language capabilities in any place of the front or the backend.
8. Testing: I did not spend a lot of time making tests because I want to show you more other aspects of my knowledge. You can check the tests at ./lib/src/index.test.js those tests checks if the lib are ready to export the shared functions and clases.
9. Frontend architecture: every component are inside in a contextual folder. 
10. Backend architecture: each module in the backend is contained in contextual folders. Also it can support multi version routes. (v1, v2, v3)



## Posible Improvements

1. Integration front-back tests
2. Storybook stories
3. Tests on components with enzyme or react/testing-library
4. Separe the configuration hook to it own package module
5. Separe the services hook to it own package module
6. Separe the language hook to it own package module
7. Separe the conekta service to it own package module
8. Dockerize backend
9.  Dockerize frontend and make it listening for envars (I know how to do that but the time is running...)
10. Serverside rendering (?????)
11. Paying 1000000 usd for expensive AWS services and get in a ruin  😃🤡🤡🤡🤡🤡🤡🤡

# EXTRA!!!!!!!!

Take a look on the lib folder to know how I'm sharing code between front and backend.


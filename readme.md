# Description

This app allows to mexican users to register their address perfect as posible.

# Requeriments

1. docker
2. node and npm
3. If you dont have docker, then you will need a mongo database.

# Configuration

## Frontend 

Inside `frontend/.env/` copy the file `.env.example` and create a new one called `.env.development` You will need to set the value of `REACT_APP_ENV_GOOGLE_API_KEY`. Dont worry about it, I'll provide this to you.

## Backend

Inside `backend/.env/` copy the file `.env.example` and create a new one called `.env.development`. You dont need to do anything there, the example file is properly configured to run it in development env.

# Starting the backend

At first, please allow to your docker engine to mount backend and mongo folders. Then run

`docker-compose up api`

In the other hand, if you want to run the api by yourself, open the backend folder and then run

`npm run start:dev`

# Starting the mongo database

At first, please allow to your docker engine to mount backend and mongo folders. Then run

`docker-compose up mongo`

If you already have a mongo database, you can point the api to that using the configuration files or docker compose envars.

# Starting the client

Open the  frontend folder and then run

`npm run start:dev`



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



# Configuration

I'll provide the env folders by email.

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


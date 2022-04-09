# Task-manager
Task manger app using node express

## Project setup
> [ ] npm install
> [ ] Setup Mongo Connection URI and add in .env, npm i dotenv

## Architecture
- Model
    > Provide schema for table (Collection, using Mangoose)
- Controller
    > Using Model Instance to create controllers (Interact with db, using Mangoose Model instance)
- Router
    > Create routes for controllers and config CRUD operations (using express)
- Connection
    > Instantiate express, use middleware, use routers, connect to db, start server


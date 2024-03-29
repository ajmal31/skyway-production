import express,{Express} from "express"
import { Server } from "http"
import http from 'http'
import expressConfig from "./src/Framework/webserver/express"
import serverConfig from "./src/Framework/webserver/server"
import config from "./src/config/config"
import Routes from "./src/Framework/webserver/Routes"
import connection from "./src/Framework/database/connection"
import consumer from "./src/message-broker/consumer/consumer"
import env from "./src/config/env"

 
//Create Instance Of Express
const app:Express=express()

//Create Server Instance
const server:Server=http.createServer(app)

//Invoking Server Creating Function
serverConfig(server,config.port).startServer()


//Invoking Express config Function
expressConfig(app)

//Connecting Routes 
Routes(app,express)

//connect Db
connection(env.MONGO_URI)

//Invoking Consumer Function
consumer()













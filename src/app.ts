process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';


import dotenv from 'dotenv';
//import { Express } from "express"
import Server from './models/server';
//import {container} from './container'

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
})
console.log(process.env.APP_FOO)

const server = new Server()

server.listen()
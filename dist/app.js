"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';
const dotenv_1 = __importDefault(require("dotenv"));
//import { Express } from "express"
const server_1 = __importDefault(require("./models/server"));
//import {container} from './container'
dotenv_1.default.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});
console.log(process.env.APP_FOO);
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map
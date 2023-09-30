import express, { Application } from 'express'


class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001'
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en puerto '+ this.port)
        })
    }
}
export default Server;
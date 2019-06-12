
import AuthController from "./authentication/auth.controller";
import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
    public app : express.Application;
    constructor(){
        this.app = express();

        this.initializeMiddlewares();
        this.initializeControllers();
    }

    private initializeMiddlewares() : void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended : false}));
    }

    private initializeControllers() : void {
        this.app.use('/', new AuthController().getRouter());
    }



    public getInstance() : express.Application {
        return this.app;
    }
}

export default App;
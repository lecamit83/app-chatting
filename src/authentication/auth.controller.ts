
import User from "./../users/user.interface";
import Controller from "./../interfaces/controller.interface";
import { Router, NextFunction, Request, Response } from 'express';

class AuthController implements  Controller {

    public path : string;
    public router : Router;

    constructor(){
        this.path = 'auth';
        this.router = Router();

        this.intializeRoutes();
    }


    private intializeRoutes() : void {
        this.router.post(`${this.path}/register`, this.registration);
    }

    private registration = async (request : Request , response : Response ) => {
        const user : User = request.body;
        console.log(user);
        
    }

    public getRouter() : Router {
        return this.router;
    }
}
export default AuthController;
import { Request, Response } from "express";

//Ping Controller
export class PingController {

    static async ping(_req: Request, res: Response) {
        return res.status(200).send("Pong !");
    }
}
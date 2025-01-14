import { Request, Response } from "express";

//Prompt Controller
export class UserController {

    static async createUser(req: Request, res: Response) : Promise<Response> {
        try {
            const body = req?.body;
            console.log(body);
            
            // const image_hash = 

            // if(!prompt){
            //     throw new Error('Prompt can not be empty');
            // }

            // const data = await promptService.getPromptResponse(prompt);

            return res.status(200).send({
                status: true,
                data: null,
                error: null
              })
        } catch (error) {
            console.log("Error in generating response \n" + error);
            return res.status(500).send({
                success: false,
                data: null,
                error
            });
        }
    }
}
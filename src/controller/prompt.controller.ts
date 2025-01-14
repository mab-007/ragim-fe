import { Request, Response } from "express";
import promptService from "../serivce/prompt.service";

//Prompt Controller
export class PromptController {

    static async fetchPromptResponse(req: Request, res: Response) : Promise<Response> {
        try {
            const prompt = req?.body?.prompt;

            if(!prompt){
                throw new Error('Prompt can not be empty');
            }

            const data = await promptService.getPromptResponseSession(prompt);

            return res.status(200).send({
                status: true,
                data: data,
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
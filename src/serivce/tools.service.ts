import { Utils } from "../utils/utils";
import journalService from "./journal.service";

class ToolsService {

    public async toolExecution(toolName: string, args: any) {
        try {
            console.log(toolName);
            console.log(args);
        } catch(err) {

        }
    }

    public async sheildReqRes(prompt: string) : Promise<Boolean> {
        try {
            console.log(prompt); 
            return true;
        } catch(err) {
            return false;
        }
    }



    public async isQuestion(prompt: String): Promise<Boolean> {
        const condition_prompt : string = 
         `Output the nature of prompt as true or false only nothing else:
                 - true : if the prompt is a question, request or an instruction
                 - false : if it is not yes
                 Prompt: ${prompt}
             `;
 
         const response = await journalService.generateResponse(condition_prompt);
         
         return new Utils().strToBoolean(response);
       }
}

export default new ToolsService();
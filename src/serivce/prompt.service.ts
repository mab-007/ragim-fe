import journalService from "./journal.service";
import toolsService from "./tools.service"; 


class PromptService {

    public async getPromptResponse(prompt : string) : Promise<string> {
        try { 
            const sheildRes = await toolsService.sheildReqRes(prompt);
            if(!sheildRes) {
                return `Oops! I can't generate that response. Can I help you ask something else?`
            }

            let isQuestion = await toolsService.isQuestion(prompt);
            
            const dbRes = await journalService.saveUserPromptAndResonse(prompt, isQuestion);
            let response  : string | null = null;
            if(isQuestion) {
                response = await this.generateResponseFromContext(prompt);
            } else {
                response = '#Noted 📝';
            }
            if(!response) {
                throw new Error('Somethign went wrong, we will be right back')
            } else await journalService.updateResponsePrompt(response, dbRes._id.toString());

            return response;
        } catch (err) {
            console.log(err);
            //await journalService.updateResponsePrompt(`Something went wrong!`, id, err);
            throw new Error('Error in generating the response');
        }
    }

    public async getPromptResponseSession(prompt : string) : Promise<string> {
        try { 
            const sheildRes = await toolsService.sheildReqRes(prompt);
            if(!sheildRes) {
                return `Oops! I can't generate that response. Can I help you ask something else?`
            }
            const session = await journalService.chatSession(); 
            const result = await session.sendMessage(prompt);
            const obj = {
                req: prompt,
                res: result.response.text()
            }
            session._history.push(obj);
            console.log(session.getHistory());
            return result.response.text();
        } catch (err) {
            console.log(err);
            //await journalService.updateResponsePrompt(`Something went wrong!`, id, err);
            throw new Error('Error in generating the response');
        }
    }

    


    private async generateResponseFromContext(prompt: string) : Promise<string | null>{
        const queryContext = await journalService.fetchPromptContext(prompt);
            let context = [];
            let response : string | null = '';
            console.log('hi');
            
            console.log(queryContext);
            if(queryContext.length){
                for(let i=0;i<queryContext.length;i++){
                    const context_score = queryContext[i]?.score || 0;
                    if(context_score >= 0.7) {
                        context.push(queryContext[i].user_query.toString());
                    } else {
                        context.push(queryContext[0].user_query.toString());
                        response =  await journalService.generateResponse(prompt, context);
                    }
                }
            }
            response = await journalService.generateResponse(prompt, context);

            return response;
    }



    // private async embeddingPrompsAndResponse(prompt: string) : Promise<Boolean> {
    //     return true;
    // }

    // private async inferanceLoop() {

    // }

}

export default new PromptService();
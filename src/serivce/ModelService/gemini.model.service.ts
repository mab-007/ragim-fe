import { GenerateContentResult } from "@google/generative-ai";
import modelFactory from "../../factory/model.factory";

class GeminiModelService {

    public async generateRespFlashOnePointFive(prompt: string) : Promise<string | null> {
        const result  = await (await modelFactory.getModel('gemini-1.5-flash')).generateContent(prompt);
        return result.response.text();
    }

    public async generateRespWithContextFlashOnePointFive(prompt: string, context: Array<string>) : Promise<string | null> {
        const result  = await (await modelFactory.getModel('gemini-1.5-flash')).generateContent([...context,prompt]);
        return result.response.text();
    }

    public async embedPrompt(prompt: string) : Promise<Array<number>> {
        const result = await (await modelFactory.getModel('textEmbedding')).embedContent(prompt);
        return  result.embedding.values
    }

    public async fetchDataFromDocumentOrVison(prompt: string, document: any, docType: string) : Promise<GenerateContentResult> {
        const result = await (await modelFactory.getModel('geminiFlash')).generateContent([
            {
                inlineData: {
                    data: document,
                    mimeType: docType
                }
            },
            prompt
        ]);

        return result;
    }

}

export default new GeminiModelService();
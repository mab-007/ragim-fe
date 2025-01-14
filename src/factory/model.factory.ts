import { GenerativeModel } from "@google/generative-ai";
import { genAI } from "../utils/googleClient";

class ModelFactory {

    public async getModel(model: String) : Promise<GenerativeModel> {
        try {
            switch(model) {
                case 'geminiFlash':
                    return  genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: "You are a my personal assitant. Your name is Jarvis." });
                case 'textEmbedding':
                    return genAI.getGenerativeModel({ model: "text-embedding-004"})
                default:
                    return genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            }
        } catch (err) {
            throw new Error('Error in returning model instance');
        }
    }
}

export default new ModelFactory();
import { GenerativeModel } from "@google/generative-ai";

export interface ModelFactoryInterface {
    getModel(model: String) : Promise<GenerativeModel>;
}
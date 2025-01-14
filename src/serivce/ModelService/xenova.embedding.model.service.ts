import { pipeline } from '@xenova/transformers';

class XenovaModelService {


    public async getEmbedding(data: string) : Promise<Array<number>> {
        const embedder = await pipeline(
            'feature-extraction', 
            'Xenova/nomic-embed-text-v1');
        const results = await embedder(data, { pooling: 'mean', normalize: true });
        return Array.from(results.data);
    }
}

export default new XenovaModelService();
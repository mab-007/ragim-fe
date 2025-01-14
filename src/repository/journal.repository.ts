import journalModel, { Journal } from "../entity/journal.entity";
import { CreateJournalObj, UpdateJournalEntry } from "../types/journal.types";

class JournalEntityRepository {

    public async createJournalEntry(data: CreateJournalObj) : Promise<Journal> {
        return await journalModel.create({
            user_id: data?.user_id,
            user_query: data?.user_query,
            user_query_vector: data?.user_query_vector,
            user_query_vector_dimension: data?.user_query_vector_dimension,
            embedding_algorithm: data?.embedding_algorithm,
            is_question: data.is_question
        });
    }

    public async fetchJournalEntry(id: String) : Promise<Journal | null> {
        return await journalModel.findOne({_id: id});
    }

    // private cosineDistance(v1: Array<number>, v2: Array<number>){
    //   let dotProduct = 0;
    //   let magnitudeV1 = 0;
    //   let magnitudeV2 = 0;

    //   for (let i = 0; i < v1.length; i++) {
    //     dotProduct += v1[i] * v2[i];
    //     magnitudeV1 += Math.pow(v1[i], 2);
    //     magnitudeV2 += Math.pow(v2[i], 2);
    //   }

    //   magnitudeV1 = Math.sqrt(magnitudeV1);
    //   magnitudeV2 = Math.sqrt(magnitudeV2);

    //   return dotProduct / (magnitudeV1 * magnitudeV2);
    // }

    public async fetchByQueryVector(user_id: String, prompt: String,query: Array<number>) : Promise<Array<Journal> | []> {      
        const res = await journalModel.aggregate([
            {
              $vectorSearch: {
                'filter': { user_id, user_query: {$ne: prompt}, is_question: false},
                "index": "QueryVector",
                "limit": 10,
                "numCandidates": 100,
                "path": "user_query_vector",
                "queryVector": query
              }
            },
            {
              "$project": {
                "user_query": 1,
                "llm_res": 1,
                "score": { "$meta": "vectorSearchScore" }
              }
            }
          ]);
        
        return res;
    }

    public async udpateJournalEntry(data: UpdateJournalEntry) : Promise<Boolean> {
        return !!await journalModel.findOneAndUpdate(
            { _id: data.id },
            {
                $set: {
                    llm_res: data?.llm_res,
                    llm_res_vector: data?.llm_res_vector,
                    error_message: data?.error_message
                }
            }
        )
    }
}

export default new JournalEntityRepository();
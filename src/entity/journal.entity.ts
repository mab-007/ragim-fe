import mongoose from "mongoose";


export interface Journal {
    _id: String,
    user_id: String;
    user_query: String;
    user_query_vector: Array<Number>;
    user_query_vector_dimension: String;
    embedding_algorithm: String;
    llm_res: String;
    llm_res_vector: Array<Number>;
    error_message: any;
    score?: number;
    is_question?: Boolean;
}

const journalSchema = new mongoose.Schema<Journal>({
    user_id: { type: String, required: true},
    user_query: { type: String, required: true},
    user_query_vector: {type: [Number], required: true},
    user_query_vector_dimension: { type: String, required: true},
    embedding_algorithm: { type: String, required: true},
    llm_res: { type: String, required: false},
    llm_res_vector: { type: [Number], required: false},
    error_message: { type: Object, required: false},
    is_question: {type: Boolean, required: true}

}, {
    timestamps: true
})


const JournalModel = mongoose.model<Journal>('journal', journalSchema);

export default JournalModel;

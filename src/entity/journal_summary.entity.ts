import mongoose from "mongoose";


export interface JournalSummary {
    user_id: String;
    prompt: String;
    prompt_vector: Array<Number>;
    prompt_vector_dimension: String;
    embedding_algorithm: String;
    error_message: Object;
}

const journalSummarySchema = new mongoose.Schema<JournalSummary>({
    user_id: { type: String, required: true},
    prompt: { type: String, required: true},
    prompt_vector: {type: [Number], required: true},
    prompt_vector_dimension: { type: String, required: true},
    embedding_algorithm: { type: String, required: true},
    error_message: { type: Object, required: false}

}, {
    timestamps: true
})


const JournalSummaryModel = mongoose.model<JournalSummary>('journal', journalSummarySchema);

export default JournalSummaryModel;

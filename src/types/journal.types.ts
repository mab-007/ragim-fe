export interface CreateJournalObj {
    user_id: String;
    user_query: String;
    user_query_vector: Array<Number>;
    user_query_vector_dimension: String;
    embedding_algorithm: String;
    llm_res?: String;
    llm_res_vector?: String;
    error_message?: Object;
    is_question: Boolean;
}


export interface UpdateJournalEntry {
    id: String;
    llm_res?: String | null;
    llm_res_vector?: Array<Number>;
    error_message?: any
}
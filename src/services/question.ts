import axios from "./ajax";

export async function getQuestionService(id: string): Promise<any>{
    const result = await axios.get(`/api/question/${id}`);
    return result;
}
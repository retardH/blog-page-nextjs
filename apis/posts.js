import { axiosInstance } from "@/util/axiosInstance";

export const createPost = async({title,body}) => {
    try {
        const response = await axiosInstance.post('/posts',{
            title,
            body,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getPosts = async() => {
    try {
        const response = await axiosInstance.get('/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
}
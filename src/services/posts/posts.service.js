
import { axiosInstance } from "../config.service";

// export const getPosts = async () => {
//     return axiosInstance.get(`/`);
// }

export const postPost = async (data) => {
    return axiosInstance.post(`/api/v1/media`, data);
}

export const getAllPosts = async (page,pageSize) => {
    // const testResponse= await axiosInstance.get(`/api/v1/media?page=${page}&pageSize=${pageSize}`);
    // console.log()
    return await axiosInstance.get(`/api/v1/media?page=${page}&pageSize=${pageSize}`);
}



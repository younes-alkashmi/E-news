import axios from "axios";
import url from '../consts.js';

const API = axios.create({ baseURL: url });

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/post", data);

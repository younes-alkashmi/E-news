import axios from "axios";
import url from '../../consts.js';
const API = axios.create({ baseURL: url });

export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
export const adminLog = (formData) => API.post("/auth/adminlog", formData);
export const verifyUser = (confirmationCode) =>
  API.put(`/auth/confirm/${confirmationCode}`);

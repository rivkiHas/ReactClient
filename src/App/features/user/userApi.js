import axios from "axios";

let baseUrl = "http://localhost:4000/api/user";

export const login = (user) => {
  return axios.post(`${baseUrl}/login`,user);
  
};

// export const searchUser = (user) => {
//   return axios.post(`${baseUrl}/searchUser`,user);
  
// };

export const signUp =async (user) => {
    return axios.post(`${baseUrl}`,user);
   
  };
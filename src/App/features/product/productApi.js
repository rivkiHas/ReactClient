import axios from "axios"

let baseUrl = "http://localhost:4000/api/product";

export const getProducts = (page, perPage) => {
   return (
      axios.get(`${baseUrl}?perPage=${perPage}&page=${page}`)
   );
}

export const getProductsByCategoy = (category, page, perPage) => {
   return (
      axios.get(`${baseUrl}/category/${category}?perPage=${perPage}&page=${page}`)
   );
}
export const getTotalProductsByCategoy = (category) => {
   return (
      axios.get(`${baseUrl}/getTotalProductPerCategory/${category}`)
   );
}


export const deleteProduct = (id,token) => {
   return (
      axios.delete(`${baseUrl}/${id}`,{
         headers:{"x-access-token":token}
      })
   );
}

export const getProductById = (id) => {
   return (
      axios.get(`${baseUrl}/${id}`)
   );
}
export const addProduct = (product, token) => {
   return axios.post(`${baseUrl}`, product, {
      headers: {
         "x-access-token": token
      },
   });
}

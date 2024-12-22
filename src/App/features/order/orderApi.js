
import axios from "axios";

//קריאה לשרת שעושה הוספה להזמנה
let baseUrl = "http://localhost:4000/api/order";

export const addOrder = (order, token) => {
    return axios.post(`${baseUrl}`, order, {
        headers: {
            "x-access-token": token
        },
    });
};

export const getAllOrders = () => {
    return (
        axios.get(`${baseUrl}`)
    );
}
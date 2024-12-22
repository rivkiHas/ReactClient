import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const ProtectedRouteToUser = ({ children }) => {

    const user = useSelector(state => state.user.currentUser);
    let navigate=useNavigate()

    if (!user || user.role == "USER") {
        navigate ('/about') 
    }
    else {
        return children;
    }


}

export default ProtectedRouteToUser;


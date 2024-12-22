
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRouteToAdmin = ({ children }) => {
    const user = useSelector(state => state.user.currentUser);
    let navigate = useNavigate()

    if (!user) {

        navigate('/logIn')
        return null;
    }

    return children;
}

export default ProtectedRouteToAdmin;
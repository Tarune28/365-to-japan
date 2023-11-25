// Imports
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { logout } from "../../../Firebase";

function LogoutPage() {
    
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate("/login");
    },[navigate]);

    return (<></>);
}

export default LogoutPage;
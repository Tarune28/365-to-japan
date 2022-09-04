import { useEffect } from "react";
import { useNavigate } from "react-router";
import { logout } from "../../../Firebase";
import pageImage from "../../../img/about/about-banner.jpg";


function LogoutPage() {
    
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        
        navigate("/login");
    },[navigate]);
}

export default LogoutPage;
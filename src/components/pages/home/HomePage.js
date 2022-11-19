import { useEffect } from "react";
import HomePreview from "../../../components/blogpreview/homepreview/HomePreview";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import HomeBanner from "../../../components/homebanner/HomeBanner";

import MomentUtils from "../../../utils/MomentUtils";
import RequestUtils from "../../../utils/RequestUtils";

function HomePage(){


    return (
        <>
        
        <HomeBanner/>
        <HomePreview/>
        <Footer/>
        
        </>
    );
}

export default HomePage;
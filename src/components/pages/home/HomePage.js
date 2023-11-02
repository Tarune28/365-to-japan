import { useEffect } from "react";
import HomePreview from "../../homepreview/HomePreview";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import HomeBanner from "../../homebanner/HomeBanner";

import MomentUtils from "../../../utils/MomentUtils";
import RequestUtils from "../../../utils/RequestUtils";

function HomePage(){


    return (
        <>
        
        <HomeBanner/>
        <HomePreview/>
        
        </>
    );
}

export default HomePage;
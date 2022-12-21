import AllBlogsPreview from "../../blogpreview/allblogspreview/AllBlogsPreview";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import PageBanner from "../../pagebanner/PageBanner";
import pageImage from "../../../img/blogs/blogs-banner.jpg"

function BlogPage(){
    return (
        <>
        <Header/>
        <PageBanner image={pageImage} title="Blogs."/>
        <AllBlogsPreview/>
  
        </>
    );
}

export default BlogPage;
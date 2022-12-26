import BlogCard from "../blogcard/BlogCard";

// cover images

import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import "../homepreview/HomePreview.css"
import { Button } from "react-bootstrap";
import moment from "moment";


function HomePreview(props) {

  let [listBlogs, setListBlogs] = useState([]);

  useEffect(populateEvents, []);

    function populateEvents() {
        RequestUtils.get("/blog/previews") // send out post req and get the response from server
        .then(response => response.json()) // take response and turn it into JSON object
        .then(data => { // data = JSON object created ^^
            if (!data.ok) {
                alert("Events could not be populated!");
                return;
            }
            console.log(data.arr);
            (data.arr).sort((a,b) => new moment(b.date).format('YYYYMMDD') - new moment(a.date).format('YYYYMMDD'));
            setListBlogs(data.arr);

          



        })
        .catch(error => { 
            alert(error);
        }); 
    }

  // let testObj = {
  //   _id: "aisdhfioasdf",
  //   title: "Title",
  //   bannerURL: "https://i.imgur.com/TFQ6tfg.jpeg",
  //   date: moment(date),
  //   description: "blogDescription",
  //   category: "blogCategory",
  //   icon: "fa-pencil"
  // }
  

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <section className="blog_area area-padding">
      <div className="container">
        <div className="area-heading" style={{fontFamily: "inherit"}}>
          <h3 id="target">
            Recent Blogs
          </h3>
          <p>365ToJapan blogs are posted 1-2 times weekly.</p>
        </div>
        <div className="row portfolio_area">
          <div className="row portfolio-grid">
            {
                listBlogs.map((singularBlogPost) => {
                    // Code that runs for each element
                    // TODO: Create delete handler
                    return (
                      <BlogCard blogInfo={singularBlogPost}/>
                    );
                })
            }
          
          </div>
        </div>
        <div className="area-heading">
          <Button href="/blogs" className="btn btn-primary-soft" style={{ width: "50%", borderRadius: "15px" }}>
            View All Blogs
          </Button>
    
        </div>
      </div>
    </section>
    </>
  );
}

export default HomePreview;

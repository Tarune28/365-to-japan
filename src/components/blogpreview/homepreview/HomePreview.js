import BlogCard from "../blogcard/BlogCard";

// cover images

import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import "../homepreview/HomePreview.css"
import { Button } from "react-bootstrap";
import moment from "moment";
import street from "./../../../img/home/sqbg.jpeg";


function HomePreview(props) {

  let [listBlogs, setListBlogs] = useState([]);
  let [views, setViews] = useState(0);
  let [blogs, setBlogs] = useState(0);

  useEffect(populateEvents, []);
  useEffect(getStats, []);

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

    function getStats() {
      RequestUtils.get("/blog/getStats")
        .then(response => response.json()) 
        .then(data => { 
          if (!data.ok) {
            alert("Events could not be populated!");
            return;
        }
        setViews(data.views);
        setBlogs(data.blogs);
        
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
            About 365ToJapan
          </h3>
        </div>
        
        <div className="row" style={{justifyContent: "center"}}>
        <div className="col-9">
          <p>
365toJapan is a language and culture publication focused on Japan. Each article comes in the form culture, learning, or research-based pieces. The platform was created to enable the primary author—Tarun Eswar—to reflection and share his progress learning Japanese over the course of 5+ years. Though, 365toJapan extends beyond articles, including having contests and more.</p>
          <br></br>
          <div className="row text-center">
            <div className="col-4">
              <h2 className="text-center counter">{views}</h2>
              <p className="text-center">Total Reads</p>
            </div>
            <div className="col-4">
              <h2 className="text-center counter">{blogs}</h2>
              <p className="text-center">Blogs</p>
            </div>
            <div className="col-4">
              <h2 className="text-center counter">2020</h2>
              <p className="text-center">Year Established</p>
            </div>
            <div className="col-12">
              <br></br>
            <Button className="btn btn-primary-soft px-5">Learn More</Button>
            </div>
            
          </div>
          
        </div>
        <div className="col-3">
        <img src={street} style={{borderRadius: "50%"}} />
        </div>
        </div>
      </div>
      
    </section>

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
          <Button href="/blogs" className="btn btn-primary-soft">
            View All Blogs
          </Button>
    
        </div>
      </div>
    </section>
    </>
  );
}

export default HomePreview;

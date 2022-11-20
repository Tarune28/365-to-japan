import BlogCard from "../blogcard/BlogCard";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
// cover images
import blog22Cover from "../../../img/blogs/immersion/cover.png"
import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import { Button } from "react-bootstrap";
import moment from "moment";

function AllBlogsPreview(props) {

  let date = new Date();

  let [listBlogs, setListBlogs] = useState([]);

  useEffect(() => {
    populateEvents(20);
    
  }, [])

  function populateEvents(days) {
 
    let req = days;
    RequestUtils.get("/blog/getCards?days=" + req) // send out post req and get the response from server
    .then(response => response.json()) // take response and turn it into JSON object
    .then(data => { // data = JSON object created ^^
        if (!data.ok) {
            alert("Events could not be populated!");
            return;
        }
        console.log(data.arr)
        setListBlogs(data.arr);
        console.log(data.ok);

    })
    .catch(error => { 
        alert(error);
    }); 
}
const callbackTabClicked = (key, event) => {

  if (key === '1') {
    populateEvents(0);
    console.log(listBlogs);
  }
  if (key === '2') {
    populateEvents(1);
    console.log(listBlogs);
  }
  if (key === '3') {
    populateEvents(2);
    console.log(listBlogs);
  }
  if (key === '4') {
    populateEvents(3);
    console.log(listBlogs);
  }
};


    

  return (
    <section className="blog_area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3>
            <a id="target">Recent Blogs</a>
          </h3>
          <p>365ToJapan blogs are posted 1-2 times weekly.</p>
        </div>
        <Tabs defaultActiveKey="1" onTabClick={callbackTabClicked}>
    <Tabs.TabPane tab="All Time" key="1">
    <div className="row portfolio_area area-padding">
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
    
    </Tabs.TabPane>
    <Tabs.TabPane tab="Past Month" key="2">
    <div className="row portfolio_area area-padding">
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
    </Tabs.TabPane>
    <Tabs.TabPane tab="Past 6 Months" key="3">
    <div className="row portfolio_area area-padding">
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
    </Tabs.TabPane>
    <Tabs.TabPane tab="Past Year" key="4">
    <div className="row portfolio_area area-padding">
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
    </Tabs.TabPane>
  </Tabs>
          
     
      
      </div>
    </section>
  );
}

export default AllBlogsPreview;

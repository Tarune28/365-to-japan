import BlogCard from "../blogcard/BlogCard";

// cover images
import blog22Cover from "../../../img/blogs/immersion/cover.png"
import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";

function AllBlogsPreview(props) {

  let date = new Date();

  let [listBlogs, setListBlogs] = useState([]);

  useEffect(populateEvents, []);

    function populateEvents() {
        RequestUtils.get("http://localhost:8080/blog/previews") // send out post req and get the response from server
        .then(response => response.json()) // take response and turn it into JSON object
        .then(data => { // data = JSON object created ^^
            if (!data.ok) {
                alert("Events could not be populated!");
                return;
            }
            setListBlogs(data.arr);


        })
        .catch(error => { 
            alert("Something went wrong! 176");
        }); 
    }

  return (
    <section className="blog_area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3>
            <a id="target">Recent Blogs</a>
          </h3>
          <p>365ToJapan blogs are posted 1-2 times weekly.</p>
        </div>
        <div className="row portfolio_area area-padding">
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">
                all
              </li>
              <li data-filter=".pm">Past Month</li>
              <li data-filter=".p6">Past 6 Months</li>
              <li data-filter=".py">Past Year</li>
            </ul>
          </div>
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
          <a
            className="w3-button w3-hoverColor1"
            style={{ width: "50%", borderRadius: "15px" }}
            href="blogpage.html"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
}

export default AllBlogsPreview;

// Imports
import BlogBanner from "../../../components/blogbanner/BlogBanner";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";

// Stylesheets
import "./BlogTemplate.css";

function BlogTemplate(props) {
  const params = useParams();
  let [blogPostData, setBlogPostData] = useState([]);

  let [views, setViews] = useState("Loading...");

  useEffect(() => {
    window.scrollTo(0, 0);
    requestBlog();
  }, []);

  function requestBlog() {
    let id = params.id;

    Promise.all([
      RequestUtils.get("/blog/info?id=" + id)
      .then((response) => response.json()),
      RequestUtils.post("/blog/updateCounter", {
        name: params.id,
      })
        .then((res) => res.json())
    ]).then((data) => {
        if (!data[0].ok) {
          alert("Blog could not be found!");
          return;
        }
        if (data[0].ok) {
          setBlogPostData(data[0].arr[0]);
        }
        if(data[1].count != null) {
          setViews(data[1].count.toString() + " views");
        }
        
      })
      .catch((error) => {
        console.log(error);
      });

    // RequestUtils.post("/blog/updateCounter", {
    //   name: params.id,
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
        
    //   });
  }

  return (
    <div>
      <BlogBanner pageInfo={blogPostData}></BlogBanner>
      <section className="blog-area area-padding">
        <div className="container grey">
          <div style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: blogPostData.html }}
            />
            <hr></hr>
            <div className="row" style={{ padding: "0px", margin: "0px" }}>
              <p id="count" className="col-6">
                {views}
              </p>
              <p
                className="col-6"
                style={{ float: "right", textAlign: "right" }}
              >
                Tarun Eswar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogTemplate;

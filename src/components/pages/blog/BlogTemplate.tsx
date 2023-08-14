// Imports
import BlogBanner from "../../blogbanner/BlogBanner";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import { ConfigProvider, Skeleton, Space, Spin } from 'antd';

// Stylesheets
import "./BlogTemplate.css";
import React from "react";

function BlogTemplate() {
  const params = useParams();
  interface blogPostType {
    title?: string;
    bannerURL?: string;
    date?: string;
    html?: string;
    tags?: string[];
    id?: string;
  }

  type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
    Button?: {
      colorPrimary: string;
      algorithm?: boolean;
    };
  };
  
  const defaultData: ThemeData = {
    borderRadius: 6,
    colorPrimary: 'red',
  };

  const [data, setData] = React.useState<ThemeData>(defaultData);

  let [blogPostData, setBlogPostData] = useState<blogPostType>({});

  let [views, setViews] = useState("Loading...");

  let [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0);
    requestBlog();
  }, []);

  function requestBlog() {
    let id = params.id;

    Promise.all([
      RequestUtils.get("/blog/info?id=" + id, "")
      .then((response) => response.json()),
      RequestUtils.post("/blog/updateCounter", {
        name: params.id,
      }, "")
        .then((res) => res.json())
    ]).then((data) => {

        let queue: number = 0;

        if (!data[0].ok) {
          alert("Blog could not be found!");
          
          return;
        }
        if (data[0].ok) {
          setBlogPostData(data[0].arr[0]);
          queue += 1;
        }
        if(data[1].count != null) {
          setViews(data[1].count.toString() + " views");
          queue += 1;
        }
        if(queue === 2) {
          setLoading(false);
        }
        
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <BlogBanner pageInfo={blogPostData} loading={loading}></BlogBanner>
      <section className="blog-areag">
        <div className="container grey">
        {loading ?
            <div className="loading">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: data.colorPrimary,
                    borderRadius: data.borderRadius,
                  },
                }}
              ></ConfigProvider>
              <Skeleton paragraph={{ rows: 20 }} title={false} active={true}/>
              </div> :
          <div style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
             
            <div
            className="content"
            dangerouslySetInnerHTML={{ __html: blogPostData!["html"]! }}
          />
          
            
            <hr></hr>
            <div className="row info1" style={{ padding: "0px", margin: "0px" }}>
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
          }
        </div>
      </section>
    </div>
  );
}

export default BlogTemplate;

// Imports
import { useEffect, useState } from "react";
import BlogCard from "../blogcard/BlogCard";
import { Card, Col, Tabs } from "antd";
import RequestUtils from "../../../utils/RequestUtils";
import { ConfigProvider } from "antd";

// Stylesheets
import "./AllBlogsPreview.css";

function AllBlogsPreview(props: any) {

  let [listBlogs, setListBlogs] = useState([]);

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    populateEvents(20);
  }, []);

  // Populate events
  function populateEvents(days: number) {
    setLoading(true);
    let req = days;
    RequestUtils.get("/blog/getCards?days=" + req)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Blogs could not be populated!");
          return;
        }
        for (let i = 0; i < data.arr.length; i++) {
          data.arr[i].animationType = true;
        }
        setListBlogs(data.arr);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Callback for tab clicked
  const callbackTabClicked = (key: string, event: any) => {
    if (key === "1") {
      populateEvents(0);
    }
    if (key === "2") {
      populateEvents(1);
    }
    if (key === "3") {
      populateEvents(2);
    }
    if (key === "4") {
      populateEvents(3);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <section className="blog_area area-padding portfolio-grid grid-sizer">
        <div className="container">
          <div className="area-heading margin-top-5">
            <h3>
              <a id="target">All Blogs</a>
            </h3>
            <p>365ToJapan blogs are posted 1-2 times weekly.</p>
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#01B093",
              },
            }}
          >
            <Tabs defaultActiveKey="1" onTabClick={callbackTabClicked}>
              <Tabs.TabPane tab="All Time" key="1">
                {loading ? <div className="row portfolio-grid">
                {Array(9)
                  .fill(null)
                  .map((singularBlogPost) => {
                    return (
                      <Col
                        xs={{ span: 23 }}
                        md={{ span: 11, offset: 0 }}
                        lg={{ span: 8, offset: 0 }}
                      >
                        <Card loading={true} style={{ marginBottom: 40 }} />
                      </Col>
                    );
                  })}
              </div>:<div className="row portfolio_area mt-4">
                  <div className="row portfolio-grid">
                    {listBlogs.map((singularBlogPost) => {
                      return <BlogCard blogInfo={singularBlogPost} loading={loading} />;
                    })}
                  </div>
                </div>}
                
              </Tabs.TabPane>
              <Tabs.TabPane tab="Past Month" key="2">
                {loading ? <div className="row portfolio-grid">
                {Array(9)
                  .fill(null)
                  .map((singularBlogPost) => {
                    return (
                      <Col
                        xs={{ span: 23 }}
                        md={{ span: 11, offset: 0 }}
                        lg={{ span: 8, offset: 0 }}
                      >
                        <Card loading={true} style={{ marginBottom: 40 }} />
                      </Col>
                    );
                  })}
              </div>:<div className="row portfolio_area area-padding portfolio-grid grid-sizer">
                  <div className="row portfolio-grid">
                    {listBlogs.map((singularBlogPost) => {
                      return <BlogCard blogInfo={singularBlogPost} loading={loading} />;
                    })}
                  </div>
                </div>}
                
              </Tabs.TabPane>
              <Tabs.TabPane tab="Past 6 Months" key="3">
                {loading ? <div className="row portfolio-grid">
                {Array(9)
                  .fill(null)
                  .map((singularBlogPost) => {
                    return (
                      <Col
                        xs={{ span: 23 }}
                        md={{ span: 11, offset: 0 }}
                        lg={{ span: 8, offset: 0 }}
                      >
                        <Card loading={true} style={{ marginBottom: 40 }} />
                      </Col>
                    );
                  })}
              </div> : <div className="row portfolio_area area-padding">
                  <div className="row portfolio-grid">
                    {listBlogs.map((singularBlogPost) => {
                      return <BlogCard blogInfo={singularBlogPost} loading={loading} />;
                    })}
                  </div>
                </div>}
                
              </Tabs.TabPane>
              <Tabs.TabPane tab="Past Year" key="4">
                {loading ? <div className="row portfolio-grid">
                {Array(9)
                  .fill(null)
                  .map((singularBlogPost) => {
                    return (
                      <Col
                        xs={{ span: 23 }}
                        md={{ span: 11, offset: 0 }}
                        lg={{ span: 8, offset: 0 }}
                      >
                        <Card loading={true} style={{ marginBottom: 40 }} />
                      </Col>
                    );
                  })}
              </div> :<div className="row portfolio_area area-padding">
                  <div className="row portfolio-grid">
                    {listBlogs.map((singularBlogPost) => {
                      return <BlogCard blogInfo={singularBlogPost} loading={loading} />;
                    })}
                  </div>
                </div>}
                
              </Tabs.TabPane>
            </Tabs>
          </ConfigProvider>
        </div>
      </section>
    </>
  );
}

export default AllBlogsPreview;

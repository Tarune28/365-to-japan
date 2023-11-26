// Imports
import { ReactNode, useEffect, useMemo, useState } from "react";
import BlogCard from "../blogcard/BlogCard";
import { Button, Card, Col, Tabs } from "antd";
import RequestUtils from "../../../utils/RequestUtils";
import { ConfigProvider } from "antd";

// Stylesheets
import "./AllBlogsPreview.css";
import Search from "antd/es/input/Search";

function AllBlogsPreview(props: any) {
  let [listBlogs, setListBlogs] = useState([]);

  let [loading, setLoading] = useState(true);

  const OperationsSlot: Record<PositionType, ReactNode> = {
    left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
    right: (
      <Search
        placeholder="Find a blog"
        onSearch={(e) => findBlog(e)}
        enterButton
      />
    ),
  };

  type PositionType = "left" | "right";

  const [position, setPosition] = useState<PositionType[]>(["right"]);

  useEffect(() => {
    populateEvents(20);
  }, []);

  // Find blog
  function findBlog(e: any) {
    setLoading(true);
    let req = e;
    RequestUtils.get("/blog/findBlog?search=" + req)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Blog could not be found!");
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
    if (key === "5") {
    }
  };

  // Search bar implmenetation
  const slot = useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {}
    );
  }, [position]);

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
            <Tabs
              defaultActiveKey="1"
              onTabClick={callbackTabClicked}
              tabBarExtraContent={slot}
            >
              <Tabs.TabPane tab="All Time" key="1">
                {loading ? (
                  <div className="row portfolio-grid">
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
                  </div>
                ) : (
                  <div className="row portfolio_area mt-4">
                    <div className="row portfolio-grid">
                      {listBlogs.map((singularBlogPost) => {
                        return (
                          <BlogCard
                            blogInfo={singularBlogPost}
                            loading={loading}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Past Month" key="2">
                {loading ? (
                  <div className="row portfolio-grid">
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
                  </div>
                ) : (
                  <div className="row portfolio_area area-padding portfolio-grid grid-sizer">
                    <div className="row portfolio-grid">
                      {listBlogs.map((singularBlogPost) => {
                        return (
                          <BlogCard
                            blogInfo={singularBlogPost}
                            loading={loading}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Past 6 Months" key="3">
                {loading ? (
                  <div className="row portfolio-grid">
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
                  </div>
                ) : (
                  <div className="row portfolio_area area-padding">
                    <div className="row portfolio-grid">
                      {listBlogs.map((singularBlogPost) => {
                        return (
                          <BlogCard
                            blogInfo={singularBlogPost}
                            loading={loading}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Past Year" key="4">
                {loading ? (
                  <div className="row portfolio-grid">
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
                  </div>
                ) : (
                  <div className="row portfolio_area area-padding">
                    <div className="row portfolio-grid">
                      {listBlogs.map((singularBlogPost) => {
                        return (
                          <BlogCard
                            blogInfo={singularBlogPost}
                            loading={loading}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Search" key="5"></Tabs.TabPane>
            </Tabs>
          </ConfigProvider>
        </div>
      </section>
    </>
  );
}

export default AllBlogsPreview;


export default AllBlogsPreview;

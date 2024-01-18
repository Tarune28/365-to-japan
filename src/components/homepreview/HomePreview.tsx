// Imports
import BlogCard from "../blogpreview/blogcard/BlogCard";
import { useEffect, useState } from "react";
import RequestUtils from "../../utils/RequestUtils";
import { Button } from "antd";
import { Card, Statistic, Row, Col } from "antd";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Images
import nature from "./../../img/home/nature.webp";
import street from "./../../img/home/sqbg.webp";

// Stylesheets
import "./HomePreview.css";
import "../../App.css";
import "animate.css/animate.min.css";

function HomePreview(props: any) {
  let [listBlogs, setListBlogs] = useState([]);
  let [loading, setLoading] = useState(true);
  let [views, setViews] = useState(0);
  let [blogs, setBlogs] = useState(0);

  useEffect(populateEvents, []);

  function populateEvents() {
    Promise.all([
      RequestUtils.get("/blog/previews").then((response) => response.json()),
    ]).then((data) => {
      if (!data[0].ok) {
        alert("Events could not be populated!");
        return;
      }

      for (let i = 0; i < data[0].arr.length; i++) {
        data[0].arr[i].animationType = false;
      }
      setListBlogs(data[0].arr);
      setViews(data[0].count);
      setBlogs(data[0].blogs);
      console.log(data[0].blogs);
      setLoading(false);
    });
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <section className="mt-5" style={{ marginBottom: "60px" }}>
        <div className="container information-1">
          <div className="row">
            <div className="col-8 col-9-ext">
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <div className="area-heading" style={{ fontFamily: "inherit" }}>
                  <h3 id="target">About 365ToJapan</h3>
                </div>
                <p>
                  365toJapan is a language and culture publication focused on
                  Japan. Each article comes in the form culture, learning, or
                  research-based pieces. The platform was created to enable the
                  primary author—Tarun Eswar—to reflection and share his
                  progress learning Japanese over the course of 5+ years. As a
                  software engineer, Tarun was able to leverage his skills in
                  fullstack development to build this platform from scratch, making 365toJapan one of few blogging platforms with its own custom framework. The platform was built using React, Node, Express, and MongoDB, hosted through Heroku Dynos and Firebase.
                </p>
                <br></br>
                <div className="row text-center mx-auto">
                  <Col span={6} className="mx-auto">
                    <Card bordered={true} loading={loading}>
                      <Statistic
                        title="Reads"
                        value={views}
                        valueStyle={{
                          color: "#d76e1d",
                        }}
                      />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card bordered={true} className="mx-auto" loading={loading}>
                      <Statistic
                        title="Blogs"
                        value={blogs}
                        valueStyle={{
                          color: "#d76e1d",
                        }}
                      />
                    </Card>
                  </Col>
                  <Col span={6} className="mx-auto">
                    <Card bordered={true} loading={loading}>
                      <Statistic
                        title="Est."
                        value={2020}
                        groupSeparator=""
                        valueStyle={{
                          color: "#d76e1d",
                        }}
                      />
                    </Card>
                  </Col>
                  <Col span={6} className="mx-auto">
                    <Card bordered={true} loading={loading}>
                      <Statistic
                        title="Blog Ranking"
                        value={39}
                        prefix="#"
                        groupSeparator=""
                        valueStyle={{
                          color: "#d76e1d",
                        }}
                      />
                    </Card>
                  </Col>
                  <div className="col-12">
                    <br></br>
                    <Button
                      className="btn-primary-soft px-5"
                      shape="round"
                      size="large"
                      href="/about"
                    >
                      <span className="screen-reader-text">Details</span>
                      Learn More
                    </Button>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-4 my-auto hide-show-image px-5">
              <img src={street} className="br-50" alt="street in Japan"/>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_area mt-5 pt-5">
        <div className="container information">
          <div className="row">
            <div className="col-4 my-auto hide-show-image px-5">
              <img src={nature} className="br-50 " alt="nature in Japan"/>
            </div>
            <div className="col-8 col-9-ext">
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <div className="area-heading" style={{ fontFamily: "inherit" }}>
                  <h3 id="target" style={{fontFamily: "Mukta, sans-serif"}}>365ToJapan Contests</h3>
                </div>
                <div className="row text-center">
                  <div className="col-12 no-text-center">
                    <p>
                      This summer, 365toJapan is hosting its very own poetry
                      competition. We look to celebrate the cultural aspects
                      that make Japan unique through the art of poetry, more
                      specifically Haiku. Our contest features a panel of judges
                      to provide the best feedback and prizes for the top three
                      winners. The Haiku itself can focus on any topic but we
                      suggest focusing on the princples that seperate Haiku from
                      other forms of poetry. We look forward to your
                      submissions! More information can be found below. In the
                      future, these contests will become semi-annual.
                    </p>
                  </div>
                  <br></br>
                  <div className="col-12 margin-top-1">
                    <Button
                      className="btn-primary-soft px-5"
                      shape="round"
                      size="large"
                      href="/Contests"
                    >
                      Find Contests
                    </Button>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_area margin-bottom-1 mt-3 pt-5">
        <div className="container information">
          <div className="area-heading" style={{ fontFamily: "inherit" }}>
            <h3 id="target">Recent Blogs</h3>
            <p>365ToJapan blogs are posted 1-2 times weekly.</p>
          </div>
          <div className="row portfolio_area">
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
            )}
          </div>
          <div className="area-heading">
            <Button
              className="btn-primary-soft px-5 margin-bottom-10"
              shape="round"
              size="large"
              href="/blogs"
            >
              <span className="screen-reader-text">Details</span>
              View All Blogs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePreview;

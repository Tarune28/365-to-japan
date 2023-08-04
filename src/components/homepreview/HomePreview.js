// Imports
import BlogCard from "../blogpreview/blogcard/BlogCard";
import { useEffect, useState } from "react";
import RequestUtils from "../../utils/RequestUtils";
import { Button } from "antd";
import moment from "moment";
import LoadingScreen from "react-loading-screen";
import { Card, Statistic, Row, Col } from "antd";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Images
import nature from "./../../img/home/nature.jpeg";
import logo from "../../365.png";
import street from "./../../img/home/sqbg.jpeg";

// Stylesheets
import "./HomePreview.css";
import "../../App.css";
import "animate.css/animate.min.css";

function HomePreview(props) {
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

      data[0].arr.sort(
        (a, b) =>
          new moment(b.date).format("YYYYMMDD") -
          new moment(a.date).format("YYYYMMDD")
      );
      setListBlogs(data[0].arr);
      setViews(data[0].count);
      setBlogs(data[0].blogs);
      setLoading(false);
    });
  }

  return (
    <>
      <LoadingScreen
        loading={false}
        spinnerColor="#F0965B"
        textColor="#676767"
        logoSrc={logo}
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <section style={{ marginBottom: "60px" }}>
          <div className="container information-1">
            <div className="row">
              <div className="col-8 col-9-ext">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <div className="area-heading">
                    <h3 id="target">About 365ToJapan</h3>
                  </div>
                  <p>
                    365toJapan is a language and culture publication focused on
                    Japan. Each article comes in the form culture, learning, or
                    research-based pieces. The platform was created to enable
                    the primary author—Tarun Eswar—to reflection and share his
                    progress learning Japanese over the course of 5+ years. As a
                    software engineer, Tarun was able to leverage his skills in
                    fullstack development to build this platform from scratch.
                  </p>
                  <br></br>
                  <div className="row text-center mx-4">
                    <Col span={8}>
                      <Card bordered={true}>
                        <Statistic
                          title="Total Reads"
                          value={views}
                          valueStyle={{
                            color: "#d76e1d",
                          }}
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card bordered={true}>
                        <Statistic
                          title="Blogs"
                          value={blogs}
                          valueStyle={{
                            color: "#d76e1d",
                          }}
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card bordered={true}>
                        <Statistic
                          title="Years"
                          value={4}
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
                        Learn More
                      </Button>
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
              <div className="col-3 my-auto hide-show-image margin-left-2">
                <img src={street} className="br-50" />
              </div>
            </div>
          </div>
        </section>
        <section className="blog_area" style={{ marginBottom: "60px" }}>
          <div className="container information">
            <div className="row">
              <div className="col-3 my-auto hide-show-image margin-right-2">
                <img src={nature} className="br-50 " />
              </div>
              <div className="col-8 col-9-ext">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <div className="area-heading">
                    <h3 id="target">365ToJapan Contests</h3>
                  </div>
                  <div className="row text-center">
                    <div className="col-12 no-text-center">
                      <p>
                        This summer, 365toJapan is hosting its very own poetry
                        competition. We look to celebrate the cultural aspects
                        that make Japan unique through the art of poetry, more
                        specifically Haiku. Our contest features a panel of
                        judges to provide the best feedback and prizes for the
                        top three winners. The Haiku itself can focus on any
                        topic but we suggest focusing on the princples that
                        seperate Haiku from other forms of poetry. We look
                        forward to your submissions! More information can be
                        found below. In the future, these contests will become
                        semi-annual.
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
        <section className="blog_area margin-bottom-1">
          <div className="container information">
            <div className="area-heading" style={{ fontFamily: "inherit" }}>
              <h3 id="target">Recent Blogs</h3>
              <p>365ToJapan blogs are posted 1-2 times weekly.</p>
            </div>
            <div className="row portfolio_area">
              <div className="row portfolio-grid">
                {listBlogs.map((singularBlogPost) => {
                  return (
                    <BlogCard blogInfo={singularBlogPost} loading={loading} />
                  );
                })}
              </div>
            </div>
            <div className="area-heading">
              <Button
                className="btn-primary-soft px-5 margin-bottom-10"
                shape="round"
                size="large"
                href="/blogs"
              >
                View All Blogs
              </Button>
            </div>
          </div>
        </section>
      </LoadingScreen>
    </>
  );
}

export default HomePreview;

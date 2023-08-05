// Imports
import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Col } from "antd";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Stylesheets
import "./BlogCard.css";
import "animate.css/animate.min.css";

// Meta Card
const { Meta } = Card;

function BlogCard(props) {
  return (
    <>
      <Col
        xs={{ span: 23 }}
        md={{ span: 11, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <AnimationOnScroll
          initiallyVisible={props.blogInfo["animationType"]}
          animateIn={props.blogInfo["animationType"] ? "" : "animate__fadeIn"}
        >
          <Link to={"/blog/" + props.blogInfo["_id"]}>
            <Card
              hoverable
              className="mx-2"
              style={{ marginBottom: 40, height: "660px" }}
              cover={
                <img
                  className="img-fluid w-100 card-img rounded-0"
                  src={props.blogInfo["bannerURL"]}
                  style={{ height: "300px", objectFit: "cover" }}
                  alt=""
                  loading={props.loading}
                />
              }
            >
              <div className="blog_item_img">
                <a href="blogs/immersion.html" className="blog_item_date">
                  <h3>{moment(props.blogInfo["date"]).format("DD")}</h3>
                  <p>
                    {moment(props.blogInfo["date"]).format("MMM")},{" "}
                    {moment(props.blogInfo["date"]).format("YYYY")}
                  </p>
                </a>
              </div>
              <Meta
                title={props.blogInfo["title"]}
                date={"test"}
                description={props.blogInfo["description"]}
                style={{ padding: 10, marginTop: 10 }}
              />
              <div className="additional" style={{ padding: 10 }}>
                <p>
                  <i
                    className={
                      "fa " +
                      props.blogInfo["icon"].toString() +
                      " margin-right-05"
                    }
                    title="Edit"
                  ></i>{" "}
                  {props.blogInfo["category"]}
                </p>
              </div>
            </Card>
          </Link>
        </AnimationOnScroll>
      </Col>
    </>
  );
}

export default BlogCard;

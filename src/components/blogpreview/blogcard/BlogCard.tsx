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

function BlogCard(props: { blogInfo: { [x: string]: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; loading: boolean | undefined; }) {
  
  let date = props.blogInfo["date"]?.toString();

  let image = props.blogInfo["bannerURL"]?.toString();

  let loading = props.loading;

  return (
    <>
      <Col
        xs={{ span: 23 }}
        md={{ span: 11, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <AnimationOnScroll
          animateOnce={true}
          initiallyVisible={props.blogInfo["animationType"] ? true : false}
          animateIn={props.blogInfo["animationType"] ? "" : "animate__fadeIn"}
        >
          <Link to={"/blog/" + props.blogInfo["_id"]}>
            <Card
              hoverable
              className="mx-2"
              style={{ marginBottom: 40 }}
              cover={
                <img
                  className="img-fluid w-100 card-img rounded-0"
                  src={image}
                  style={{ height: "300px", objectFit: "cover" }}
                  alt=""
                />
              }
              loading={loading}
            >
              <div className="blog_item_img">
                <a className="blog_item_date">
                  <h3>{moment(date).format("DD")}</h3>
                  <p>
                    {moment(date).format("MMM")},{" "}
                    {moment(date).format("YYYY")}
                  </p>
                </a>
              </div>
              <Meta
                title={props.blogInfo["title"]}
                description={props.blogInfo["description"]}
                style={{ padding: 10, marginTop: 10 }}
              />
              <div className="additional" style={{ padding: 10 }}>
                <p>
                  <i
                    className={
                      "fa " +
                      props.blogInfo["icon"]?.toString() +
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

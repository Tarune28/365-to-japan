import React, { useState, useEffect } from "react";
import "./BlogBanner.css";
import Typewriter from "typewriter-effect";
import moment from "moment";


function BlogBanner(props) {


  let title = (props.pageInfo);
  console.log(title);
  // sleep time expects milliseconds

  return (
    <>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
    <section className="blog-banner" style={{background: `url(${props.pageInfo.bannerURL}) center center / cover no-repeat scroll`}}>
      <div style={{position: "absolute",
    top: "0",
    left: "0",
    width:  "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "0"}}></div>
        <div className="container" style={{position: "relative", zIndex: "10"}}>
            <h2 style={{fontFamily: "Crimson Text"}}><div className="w3-black1" style={{zIndex: "10"}}
                  >{props.pageInfo.title}</div></h2>
            <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                    <div style={{width:"100%", textAlign: "center"}}>
                    <li className="breadcrumb-item date"><a style={{color: "#F08811"}}>{moment(props.pageInfo.date).format("LL")}</a></li>
                    </div>
                </ol>
            </nav>
        </div>
        <div style={{position: "absolute", bottom: "0px", left: "20px"}}>
            <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol class="breadcrumb">
                    <li className="breadcrumb-item"><a style={{color: "white"}}><i className={props.pageInfo.location != null ? "fa fa-map-pin" : ""}></i> {props.pageInfo.location}</a></li>
                </ol>
            </nav>
        </div>

    </section >
    </>
  );
}

export default BlogBanner;

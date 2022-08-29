import React, { useState, useEffect } from "react";
import "./BlogBanner.css";
import Typewriter from "typewriter-effect";
import moment from "moment";


function BlogBanner(props) {


  let title = (props.pageInfo.title);
  console.log(typeof title);
  // sleep time expects milliseconds

  return (
    <section className="hero-banner" style={{ zIndex: "-1", background: `url(${props.pageInfo.bannerURL}) no-repeat scroll center center`}}>
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
    </section >
  );
}

export default BlogBanner;

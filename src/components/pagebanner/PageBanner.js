import React, { useState, useEffect } from "react"
import "./PageBanner.css";
import Typewriter from "typewriter-effect";

// background: url(../../img/blogs/page-banner.jpg) no-repeat scroll center center;
function PageBanner(props) {

  return (
    <section className="page-banner" style={{ background: `url(${props.image}) no-repeat scroll center center` }}>
      <div className="container" style={{flexWrap: "wrap"}}>
        <h3 className="w3-text-white" style={{textIndent: ".3vw", fontSize: "4rem"}}>
          <span className="w3-black w3-opacity-min text_3">
            {props.title == "" ? "" : <Typewriter onInit={(typewriter) => {
              typewriter.typeString(props.title).start();
            }}/>}
  
          </span>
        </h3>
        <nav aria-label="breadcrumb" className="banner-breadcrumb"></nav>
      </div>
    </section>
  );
}

export default PageBanner;

import React, { useState, useEffect } from "react"
import "./PageBanner.css";
import Typewriter from "typewriter-effect";

// background: url(../../img/blogs/page-banner.jpg) no-repeat scroll center center;
function PageBanner(props) {

  return (
    <section className="page-banner" style={{ background: `url(${props.image}) no-repeat scroll center center` }}>
      <div className="container">
        <h3 className="w3-xxlarge w3-text-white" style={{textIndent: "1.1vw"}}>
          <span className="w3-black w3-opacity-min text_3">
            <Typewriter onInit={(typewriter) => {
              typewriter.typeString(props.title).start();
            }}/>
          </span>
        </h3>
        <nav aria-label="breadcrumb" className="banner-breadcrumb"></nav>
      </div>
    </section>
  );
}

export default PageBanner;

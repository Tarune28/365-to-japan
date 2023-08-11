// Imports
import React from "react";
import "./BlogBanner.css";
import moment from "moment";
import { Avatar, Skeleton, Tooltip } from "antd";

// Images
import Tarun from "../../img/about/profile.png";
import Brett from "../../img/about/brett.jpg";

function BlogBanner(props?: { pageInfo: { bannerURL?: any; title?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date?: moment.MomentInput; location?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, loading: boolean | undefined }) {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      ></link>
      <section
        className="blog-banner"
        style={{
           background: props!.loading ? "" : `url(${props!.pageInfo.bannerURL}) center center / cover no-repeat scroll`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "0",
          }}
        ></div>
        <div
          className="container"
          style={{ position: "relative", zIndex: "10" }}
        >
          <h2 style={{ fontFamily: "Crimson Text" }}>
            <div className="w3-black1" style={{ zIndex: "10" }}>
              {props!.loading ? <Skeleton paragraph={{rows: 0}}></Skeleton> : props!.pageInfo.title}
            </div>
          </h2>
          <nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <div style={{ width: "100%", textAlign: "center" }}>
                <li className="breadcrumb-item date">
                  <a style={{ color: "#F08811" }}>
                    {moment(props!.pageInfo.date).format("YYYY") + "年 " + moment(props!.pageInfo.date).format("MM") + "月 " + moment(props!.pageInfo.date).format("DD") + "日 " }
                  </a>
                </li>
              </div>
            </ol>
          </nav>
        </div>
        <div style={{ position: "absolute", bottom: "0px", left: "20px" }}>
          <nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a style={{ color: "white" }}>
                  {props!.pageInfo.location}
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div style={{ position: "absolute", bottom: "0px", right: "20px" }}>
          <Avatar.Group
            maxCount={2}
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            <Tooltip title="Tarun Eswar: Primary Author" placement="top">
              {props!.loading ? <Skeleton avatar title={false} paragraph={{rows: 0}}></Skeleton> : <Avatar src={Tarun} className="imgBl" />
              }
              
              
            </Tooltip>
            <Tooltip title="Brett Murphy Hunt: Editor" placement="top">
            {props!.loading ? <Skeleton avatar title={false} paragraph={{rows: 0}}></Skeleton> : <Avatar src={Brett} className="imgBl" />
              }
            </Tooltip>
          </Avatar.Group>
        </div>
      </section>
      </>
  );
}

export default BlogBanner;

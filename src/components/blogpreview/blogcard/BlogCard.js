import previewImg from "../../../img/blogs/immersion/cover.png";
import { FaBeer } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";

function BlogCard(props) {
  // let testObj = {
  //   _id: currentBlogId,
  //   title: blogTitle,
  //   bannerURL: blogBannerURL,
  //   date: blogDate,
  //   description: blogDescription,
  //   category: blogCategory
  // }

console.log(props.blogInfo["date"])

  return (
    <>
      <link
        href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <script
        src="https://kit.fontawesome.com/adee4bac3e.js"
        crossorigin="anonymous"
      ></script>

      <div className="col-lg-4 col-md-6 all pm">
        <Link to={"/blog/" + props.blogInfo["_id"]}>
          <div className="single_portfolio">
            <img
              className="img-fluid w-100 card-img rounded-0"
              src={props.blogInfo["bannerURL"]}
              alt="rural"
            />
            <article className="blog_item">
              <div className="blog_item_img">
                <a href="blogs/immersion.html" className="blog_item_date">
                  <h3>{moment(props.blogInfo["date"]).format("DD")}</h3>
                  <p>
                    {moment(props.blogInfo["date"]).format("MMMM")},{" "}
                    {moment(props.blogInfo["date"]).format("YY")}
                  </p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="blogs/immersion.html">
                  <h2>{props.blogInfo["title"]}</h2>
                </a>
                <p style={{ padding: "10px", wordWrap: "break-word", color: "grey"}}>
                  {props.blogInfo["description"]}
                </p>
                <ul className="blog-info-link">
                  <li>
                    <i
                      className={"fa " + props.blogInfo["icon"].toString()}
                      title="Edit"
                    ></i>
                    {props.blogInfo["category"]}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </Link>
      </div>
    </>
  );
}

export default BlogCard;

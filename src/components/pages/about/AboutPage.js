import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import PageBanner from "../../../components/pagebanner/PageBanner";
import pageImage from "../../../img/about/about-banner.jpg";
import plane from "../../../img/about/about1.jpg";
import code from "../../../img/about/coding.jpg";
import lanterns from "../../../img/about/whoAbout.jpg";
import shop from "../../../img/about/additionalInfo.jpg";
import ReactRoundedImage from "react-rounded-image";
import "../about/AboutPage.css";
import Tarun from "../../../img/about/profile.png"
import Brett from "../../../img/about/brett.jpg"
import { Button } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      <PageBanner image={pageImage} title="About 365toJapan." />
      <section className="about-area area-padding">
      
        <div className="container">
         
    
          <div className="row">
            <div className="col-lg-6">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img className=" roundedimg" src={plane} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
              <div className="about-content">
                <h4>
                  My Mission
                  <br />
                </h4>
                <p style={{ textIndent: "40px" }}>
                  I am a passionate Japanese language learner and culture
                  appreciator. Next summer, I plan to visit Japan.Like many
                  Japanese learners, I’m trying to further immerse myself in the
                  language, and I figured the best way is to spend 2 months in
                  Japan. However, I am not perfect. My cultural knowledge is
                  rusty, I can barely hang onto N3 grammar and vocabulary, and I
                  simply need a refresher on all topics. That’s where
                  “365ToJapan” comes in. A blog allows me to share my thoughts
                  and provide deeper thinking and understanding on different
                  topics while also reflecting. Additionally, I love reading and
                  writing, which makes this website a perfect outlet.
                </p>
                <Button variant="custom" href="https://365tojapan.com/blogs">Recent Blogs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area area-padding">
      
      <div className="container">
      <div className="row">
          <div className="col-lg-12 col-md-12">
              <div className="about-content">
                <h4 style={{textAlign: "center"}}>
                  The Team
                  <br />
                </h4>

                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                <div class="container1 mx-4">
                  <a target="0" href="https://www.taruneswar.com/">
                  <img src={Tarun} class="image" alt=""/>
                  
                  
                  <div class="overlay">
                    <div class="projeto01">Tarun Eswar <br/> Junior @ Mass Academy <br/> Primary Author</div>
                  </div>
                  </a>
                </div>

                <div class="container1 mx-4">
                  <a target="0" href="https://www.brettmurphyhunt.com/">
                  <img src={Brett} class="image" alt=""/>
                  <div class="overlay">
                  <div class="projeto01">Brett Murphy Hunt<br/> Lecturer @ Northeastern <br/> Editor</div>
                  </div>
                  </a>
                </div>
                  
                
                </div>
                
              </div>
            </div>
          </div>
          </div>
      </section>

      

      <section className="about-area area-padding" style={{paddingBottom: "0px"}}>
        <div className="container">
          <div className="row">
          
            <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
            <div className="about-content">

                <h4>
                  Other Passions
                  <br />
                </h4>
                <p style={{ textIndent: "40px", letterSpacing: "250%" }}>
                  Outside of Japanese, my other main hobby is coding. Rather
                  than relying on another software to assist me, this blog is
                  made from scratch. With a combination of React.js, express, and MongoDB this blog is made possible. Furthermore, free component libraries such as React-Boostrap and Antd provide the unique styling.
                  My love for computer science comes from the fact
                  that my work has the ability to influence the lives of others
                  through technology. If you'd like to learn more about my work, feel free to visit my <a href="https://www.taruneswar.com" className="link">personal website.</a>
                </p>
                <p
                  style={{
                    textIndent: "40px",
                    letterSpacing: "250%",
                    paddingBottom: "25px",
                  }}
                >
                  Additionally, I love sports. Living in the Massachusetts area,
                  I am a huge Patriots and Celtics fan. The Bruins and Red Sox
                  are also great teams; however, in my opinion, baseball and hockey are not worth it. If I'm not coding or
                  writing a blog, you can probably find me watching the Patriots
                  or Celtics.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img className=" roundedimg" src={code} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area area-padding" style={{paddingBottom: "0px"}}>
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img className=" roundedimg" src={lanterns} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
              <div className="about-content">
                <h4>
                  Who Is This Website For?
                  <br />
                </h4>
                <p style={{ textIndent: "40px" }}>
                  This website is for any Japanese enthusiast. From those who only are interested in Japanese food
                  to those who speak fluently at a native level, this website is
                  for you. Each month, 1-2 blogs will be posted about random
                  topics related to Japan. It may be “funniest Kanji” or the
                  topic could be about studying methods. Don’t miss content—stay
                  connected by joining the notification list found in the footer of this website.
                </p>
                <p style={{ textIndent: "40px" }}>
                  A brief overview of the contents of this blog can be found on
                  my introductory post,{" "}
                  <a href="https://365tojapan.com/blog/63812e8f95659bf05eaaa809" className="link">
                   setting intentions.
                  </a>{" "}
                   Every blog will most likely fall under one of the following
                  categories: food, culture, language, entertainment or
                  education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area area-padding" style={{marginBottom: "70px"}}>
        <div className="container">
          <div className="row">

      
              <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
              <div className="about-content">
                <h1
                  style={{
                    fontSize: "36px",
                    color: "#1a1d24",
                    marginBottom: "18px",
                    lineHeight: "48px",
                    paddingLeft: "25px",
                  }}
                >
                  Additional Information
                </h1>
                <p style={{ textIndent: "40px" }}>
                  One final note about me: I love giving back to the community
                  and taking up any opportunity. If you have any inquiries or
                  opportunities for me, feel free to reach me at {" "}<a href="mailto:teswar@wpi.edu" className="link">
                    teswar@wpi.edu
                  </a>.
                  
                </p>
                <p style={{ textIndent: "40px" }}>
                  I also wanted to mention that this blog is still in the
                  development phase, meaning that several features are still
                  being added. Because I'm still working on the website, there
                  may also be issues regarding the website. In the case you notice an issue, reach out to
                  {" "}<a href="mailto:teswar@wpi.edu" className="link">
                    teswar@wpi.edu
                  </a>{" "} to help me avoid future issues. Thank you!
                </p>
                <p style={{ textIndent: "40px" }}>
                  Check out the form on the contact page for any if you need to
                  contact me regarding any other issues.
                </p>
                <Button variant="custom" href="https://365tojapan.com/contact">Contact Me
                </Button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img className=" roundedimg" src={shop} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;

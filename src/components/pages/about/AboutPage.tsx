// Imports
import PageBanner from "../../pagebanner/PageBanner";
import { Button } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ConfigProvider, Steps } from "antd";

// Images
import pageImage from "../../../img/about/about-banner-min.webp";
import code from "../../../img/about/coding.jpg";
import lanterns from "../../../img/about/whoAbout.jpg";
import shop from "../../../img/about/additionalInfo.jpg";
import Tarun from "../../../img/about/profile.png";
import Brett from "../../../img/about/brett.jpg";

// Stylesheets
import "../about/AboutPage.css";
import "animate.css/animate.min.css";

function AboutPage() {
  return (
    <>
      <PageBanner
        image={pageImage}
        title="About 365toJapan"
        subtitle="The seed that started it all."
      />
      <section className="about-area starter-padding">
        <div className="container">
          <div className="row first-row">
            <div className="col-lg-8 col-md-12 offset-md-0">
              {" "}
                <div className="about-content mb-5">
                  <h4 className="area-heading-about">
                    My Mission
                    <br />
                  </h4>
                  <p style={{ textIndent: "0px" }}>
                    I am a passionate Japanese language learner and culture
                    appreciator. Next summer, I plan to visit Japan.Like many
                    Japanese learners, I’m trying to further immerse myself in
                    the language, and I figured the best way is to spend 2
                    months in Japan. However, I am not perfect. My cultural
                    knowledge is rusty, I can barely hang onto N3 grammar and
                    vocabulary, and I simply need a refresher on all topics.
                    That’s where “365ToJapan” comes in. A blog allows me to
                    share my thoughts and provide deeper thinking and
                    understanding on different topics while also reflecting.
                    Additionally, I love reading and writing, which makes this
                    website a perfect outlet.
                  </p>
                  <Button variant="custom" href="/blogs">
                    Recent Blogs
                  </Button>
                </div>
            </div>
            <div className="col-lg-2 my-auto mx-auto">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#FF914D",
                  },
                }}
              >
                <Steps
                  className=" mb-5"
                  size="small"
                  direction="vertical"
                  progressDot
                  current={6}
                  items={[
                    {
                      title: "Started Japanese",
                      description: "April, 2019",
                    },
                    {
                      title: "Began Writing Haiku",
                      description: "May 2019",
                    },
                    {
                      title: "Brainstormed Blog",
                      description: "Winter, 2020",
                    },
                    {
                      title: "Blog Number One",
                      description: "July 7th, 2021",
                    },
                    {
                      title: "JLPT N5",
                      description: "July, 2022",
                    },
                    {
                      title: "JLPT N4",
                      description: "December, 2022",
                    },
                    {
                      title: "Studied Abroad",
                      description: "June, 2023",
                    },
                    {
                      title: "JLPT N2",
                      description: "Soon?",
                    },
                  ]}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area area-padding">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="about-content">
                  <h4 style={{ textAlign: "center" }}>
                    The Team
                    <br />
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="container1 mx-4">
                      <a target="0" href="https://www.taruneswar.com/">
                        <img src={Tarun} className="image" alt="" />

                        <div className="overlay">
                          <div className="projeto01">
                            Tarun Eswar <br /> Senior @ Mass Academy <br />{" "}
                            Primary Author
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="container1 mx-4">
                      <a
                        target="0"
                        href="https://cps.northeastern.edu/faculty/brett-murphy-hunt/"
                      >
                        <img src={Brett} className="image" alt="" />
                        <div className="overlay">
                          <div className="projeto01">
                            Brett Murphy Hunt
                            <br /> Lecturer @ Northeastern <br /> Editor
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </section>
      <section className="about-area area-padding">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-lg-7 col-md-12 offset-md-0">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <div className="about-content">
                  <h4>
                    Other Passions
                    <br />
                  </h4>
                  <p style={{ textIndent: "0px", letterSpacing: "250%" }}>
                    Outside of Japanese, my other main hobby is coding. Rather
                    than relying on another software to assist me, this blog is
                    made from scratch. With a combination of React.js, express,
                    and MongoDB this blog is made possible. Furthermore, free
                    component libraries such as React-Boostrap and Antd provide
                    the unique styling. My love for computer science comes from
                    the fact that my work has the ability to influence the lives
                    of others through technology. If you'd like to learn more
                    about my work, feel free to visit my{" "}
                    <a href="https://www.taruneswar.com" className="link">
                      personal website.
                    </a>
                  </p>
                  <p
                    style={{
                      textIndent: "0px",
                      letterSpacing: "250%",
                      paddingBottom: "25px",
                    }}
                  >
                    Additionally, I love sports. Living in the Massachusetts
                    area, I am a huge Patriots and Celtics fan. The Bruins and
                    Red Sox are also great teams; however, in my opinion,
                    baseball and hockey are not worth it. If I'm not coding or
                    writing a blog, you can probably find me watching the
                    Patriots or Celtics.
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-lg-4 my-auto mx-auto">
              <img className=" roundedimg" src={code} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-area area-padding">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-lg-5 my-auto mx-auto hideimg">
              <img className=" roundedimg" src={lanterns} alt="" />
            </div>
            <div className="col-lg-6 col-lg-5-ext col-md-12 offset-md-0 offset-lg-1">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <div className="about-content">
                  <h4>
                    Who Is This Website For?
                    <br />
                  </h4>
                  <p style={{ textIndent: "0px" }}>
                    This website is for any Japanese enthusiast. From those who
                    only are interested in Japanese food to those who speak
                    fluently at a native level, this website is for you. Each
                    month, 1-2 blogs will be posted about random topics related
                    to Japan. It may be “funniest Kanji” or the topic could be
                    about studying methods. Don’t miss content—stay connected by
                    joining the notification list found in the footer of this
                    website.
                  </p>
                  <p style={{ textIndent: "0px" }}>
                    A brief overview of the contents of this blog can be found
                    on my introductory post,{" "}
                    <a
                      href="/blog/63812e8f95659bf05eaaa809"
                      className="link"
                    >
                      setting intentions.
                    </a>{" "}
                    Every blog will most likely fall under one of the following
                    categories: food, culture, language, entertainment or
                    education.
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-area area-padding mx-auto"
        style={{ marginBottom: "80px" }}
      >
        <div className="container">
          <div className="row mx-auto">
            <div className="col-lg-6 col-md-12 offset-md-0 offset-lg-1 mx-2">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <div className="about-content">
                  <h1
                    style={{
                      fontSize: "36px",
                      color: "#1a1d24",
                      marginBottom: "18px",
                      lineHeight: "48px",
                    }}
                  >
                    Additional Information
                  </h1>
                  <p style={{ textIndent: "0px" }}>
                    One final note about me: I love giving back to the community
                    and taking up any opportunity. If you have any inquiries or
                    opportunities for me, feel free to reach me at{" "}
                    <a href="mailto:teswar@wpi.edu" className="link">
                      teswar@wpi.edu
                    </a>
                    .
                  </p>
                  <p style={{ textIndent: "0px" }}>
                    I also wanted to mention that this blog is still in the
                    development phase, meaning that several features are still
                    being added. Because I'm still working on the website, there
                    may also be issues regarding the website. In the case you
                    notice an issue, reach out to{" "}
                    <a href="mailto:teswar@wpi.edu" className="link">
                      teswar@wpi.edu
                    </a>{" "}
                    to help me avoid future issues. Thank you!
                  </p>
                  <p style={{ textIndent: "0px" }}>
                    Check out the form on the contact page for any if you need
                    to contact me regarding any other issues.
                  </p>
                  <Button
                    variant="custom"
                    href="/contact"
                  >
                    Contact Me
                  </Button>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-lg-5 my-auto mx-auto hideimg">
              <img className=" roundedimg" src={shop} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutPage;

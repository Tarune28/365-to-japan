import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import PageBanner from "../../../components/pagebanner/PageBanner";
import pageImage from "../../../img/about/about-banner.jpg";
import plane from "../../../img/about/about1.jpg";
import code from "../../../img/about/coding.jpg"
import lanterns from "../../../img/about/whoAbout.jpg"
import shop from "../../../img/about/additionalInfo.jpg"

function AboutPage() {
  return (
    <>
  
      <PageBanner image={pageImage} title="About 365toJapan."/>
      <section className="about-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img
                    className="styleBox-img1"
                    src={plane}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
              <div className="about-content">
                <h4>
                  My Mission
                  <br />
                </h4>
                <p style={{textIndent: "40px"}}>
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
                <a
                  className="w3-button w3-hoverColor1"
                  style={{width: "100%", borderRadius: "15px"}}
                  href="index.html#target"
                >
                  Recent Blogs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area area-padding">
        <div className="container">
          <div className="row">
            <div className="about-content" style={{width: "100%"}}>
              <img
                src={code}
                alt="coding"
                style={{float: "right", width: "45%", padding: "25px"}}
              />
              <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
                <h4>
                  Other Passions
                  <br />
                </h4>
                <p style={{textIndent: "40px", letterSpacing: "250%"}}>
                  Outside of Japanese, my other main hobby is coding. Rather
                  than relying on another software to assist me, this blog is
                  made from scratch (I despise automated web development
                  systems, which will be a subject of one of my blogs!).
                  Additionally, my love for computer science comes from the fact
                  that my work has the ability to influence the lives of others
                  through technology.
                </p>
                <p style={{textIndent: "40px", letterSpacing: "250%", paddingBottom: "25px"}}>
                  Additionally, I love sports. Living in the Massachusetts area,
                  I am a huge Patriots and Celtics fan. The Bruins and Red Sox
                  are also great teams; however, in my opinion, baseball and
                  hockey are far too boring to enjoy. If I'm not coding or
                  writing a blog, you can probably find me watching the Patriots
                  or Celtics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img
                    className="styleBox-img1"
                    src={lanterns}
                    alt="lanterns"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
              <div className="about-content">
                <h4>
                  Who Is This Website For?
                  <br />
                </h4>
                <p style={{textIndent: "40px"}}>
                  This website is for any Japanese enthusiast—even the Anime
                  watchers who get shunned by falsely claiming they know
                  Japanese. From those who only are interested in Japanese food
                  to those who speak fluently at a native level, this website is
                  for you. Each week, 1-2 blogs will be posted about random
                  topics related to Japan. It may be “funniest Kanji” or the
                  topic could be my studying methods. Don’t miss content—stay
                  connected by joining the notification list.
                </p>
                <p style={{textIndent: "40px"}}>
                  A brief overview of the contents of this blog can be found on
                  my introductory post{" "}
                  <a href="blogs/SettingIntentions.html">
                    <u>Setting Intentions.</u>
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

      <section className="about-area area-padding">
        <div className="container">
          <div className="row">
            <div className="about-content" style={{width: "100%"}}>
              <img
                src={shop}
                alt="coding"
                style={{float: "right", width: "45%", padding: "25px"}}/>
              <div className="col-lg-5 col-md-12 offset-md-0 offset-lg-1">
                <h1 style={{fontSize: "36px", color: "#1a1d24", marginBottom: "18px", lineHeight: "48px", paddingLeft: "25px"}}>
                  Additional Information
                </h1>
                <p style={{textIndent: "40px"}}>
                  One final note about me: I love giving back to the community
                  and taking up any opportunity. If you have any inquiries or
                  opportunities for me, feel free to reach me at:
                  info@365tojapan.com.
                </p>
                <p style={{textIndent: "40px"}}>
                  I also wanted to mention that this blog is still in the
                  development phase, meaning that several features are still
                  being added. Because I'm still working on the website, there
                  may also be issues regarding the website. Any fellow coder can
                  probably relate that their applications don't work first try!
                  In the case you notice an issue, reach out to
                  info@365tojapan.com to help me avoid future issues. Thank you!
                </p>
                <p style={{textIndent: "40px"}}>
                  Check out the form on the contact page for any if you need to
                  contact me regarding any other issues.
                </p>
                <a
                  className="w3-button w3-hoverColor1"
                  style={{width: "100%", borderRadius: "15px"}}
                  href="contact.html"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage;

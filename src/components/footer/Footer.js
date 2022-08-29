

function Footer() {

    return (
        <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "#f08812"}}>About Me</h6>
                <p style={{color: "white"}}>
                  I am a passionate Japanese language learner and culture appreciator. Next summer, I plan to visit Japan. Like many Japanese learners, I’m trying to further immerse myself in the language, and I figured the best way is to spend 2 months in Japan. However, I am not perfect.            </p>
                <div className=" w3-hide-small">
                  <a href="about.html" className="w3-bar-item w3-button w3-hoverColor2" style={{width: "100%", borderRadius: "25px"}}>Read More</a>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5   col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "#f08812"}}>Notifications</h6>
                <p style={{color: "white"}}>Enter your name and email to receive updates of upcoming blogs!</p>
                <div className="" id="mc_embed_signup">
                  <form target="_blank" action="email.php"
                    method="post" className="form-inline">
                    <div className="d-flex flex-row">
                      <input className="form-control" name="NAME" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name '"
                        required="" type="text"/>
                      <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                        required="" type="email"/>
                      <button className="click-btn btn btn-default"><i className="ti-arrow-right"></i></button>
                      <div style={{position: "absolute", left: "-5000px"}}>
                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/>
                      </div>
                    </div>
                    <div className="info"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "#f08812"}}>Site Map</h6>
                <ul className="footer-div" style={{color: "white"}}>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="blogpage.html">Blogs</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html" >Contact</a></li>
                  <li><a href="#top">Back To Top</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
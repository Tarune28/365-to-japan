import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import PageBanner from "../../../components/pagebanner/PageBanner";
import pageImage from "../../../img/contact/contactUs.jpg"

function ContactPage(){
    return (
        <>
        <Header/>
        <PageBanner image={pageImage} title="Contact"/>
        <section class="area-padding">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="contact-title" style={{color: "#00b192"}}>Contact Form</h2>
                </div>
                <div class="col-12">
                    <form class="form-contact contact_form" action="contact_process.php" method="post" >
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input class="form-control" name="name" id="name" type="text" placeholder="Enter your name"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input class="form-control" name="email" id="email" type="email" placeholder="Enter email address"/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <input class="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <button type="submit" class="w3-button w3-hoverColor1" style={{width: "100%", borderRadius: "25px"}}>Send Message</button>
                        </div>
                    </form>


                </div>
                
                <div class="col-12">
                  <br/>
                    <h2 class="contact-title" style={{color: "#00b192"}}>Other Contact Methods</h2>
                    <p>Email: info@365tojapan.com</p>
                </div>
            </div>
        </div>
        
    </section>
        </>
    );
}

export default ContactPage;
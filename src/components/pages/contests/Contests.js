import AllBlogsPreview from "../../blogpreview/allblogspreview/AllBlogsPreview";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import PageBanner from "../../pagebanner/PageBanner";
import pageImage from "../../../img/contests/contest.svg"
import { Checkbox, Col, ConfigProvider, Row, Steps } from "antd";
import { Container } from "react-bootstrap";
import "./Contests.css"

function Contests(){
    return (
        <>
        <Header/>
        <PageBanner image={pageImage} title=""/>
        <Container>

        <Row>
        <Col md={5} className="mx-auto mt-4">
        <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#36B192',
      },
    }}
  >
            <Steps
    direction="vertical"
    current={0}
    items={[
      {
        title: 'Contest Start',
        description: "May 30th",
      },
      {
        title: 'Contest Conclusion',
        description: "July 30th",
      },
      {
        title: 'Release of Results',
        description: "~August 30th - September 30th",
      },
    ]}
  />
  </ConfigProvider></Col>
    <Col sm={12} className="mx-auto">
        Over the upcoming weeks, 365toJapan will host its first summer/spring haiku contest. The contest will be specifically looking for poetry in the form of haiku. The range of topics is not restricted, but focusing on Japanese culture is encouraged. The contest will be open to all ages 13 and up. The contest will be split into two submission periods, with the first submission period beginning on May 30th and ending on July 30th. The results of the contest will be released in the fall/winter issue of 365toJapan. The contest will be judged by a panel of 3-5 judges, with the final decision being made by the panel. The winner of the contest will be awarded a prize of $50.00 USD in Amazon gift cards. The second and third place winners will be awarded a prize of $35.00 USD and $15.00 USD, respectively. 
        
         <br></br><br></br>
        The contest will be hosted through Submittable CLMP. Each entry will be required to pay a fee of 5 dollars to enter the contest. The fee will be used to cover the cost of the prizes and the cost of the publication of the winning entries. The fee will be non-refundable. If accommodations are required in paying for the submission, please contact 365toJapan at info@365tojapan.com in order to receive assistance.
    </Col>
      </Row>
      <Row className="pt-5 mx-5">
  
            <h3 className="contestHeader">Guidelines (preliminary and subject to change)</h3>
            <ol>
                <li>Up to 4 haiku per person per entry, with one submission allowed per person per submission period</li>
                <li>Anticipated 2 issues per year, with one spring/summer release and one fall/winter release</li>
                <li>All ages 13 and up will be allowed to submit, with parent/guardian permission required for authors under 18</li>
                <li>All submitted work must be previously unpublished</li>
                <li>All pieces can be simultaneous submissions, provided the author immediately alerts 365toJapan if there are any haiku accepted elsewhere</li>
                <li>Moderate adult language is allowed if it serves the greater purpose of the piece; gratuitous violence and profanity will automatically disqualify a piece from publication consideration</li>
                {/* Up to 4 haiku per person per entry, with one submission allowed per person per submission period
Anticipated 2 issues per year, with one spring/summer release and one fall/winter release
All ages 13 and up will be allowed to submit, with parent/guardian permission required for authors under 18
All submitted work must be previously unpublished
All pieces can be simultaneous submissions, provided the author immediately alerts 365toJapan if there are any haiku accepted elsewhere
Moderate adult language is allowed if it serves the greater purpose of the piece; gratuitous violence and profanity will automatically disqualify a piece from publication consideration */}
            </ol>
  
      </Row>
      <Row className="pt-3 mx-5">

            <h3 className="contestHeader">Rankings</h3>
            <br></br><br></br>
            <p>After concluding the contest, we plan to provide the first place winner with 50 dollars, the second place winner with 35 dollars, and the third place winner will receive 15 dollars (in Amazon gift cards). Furthermore, the top submissions will be spotlighted on this page of 365toJapan (and will not be removed).</p>

      </Row>
      <Row className="pt-3 mx-5">

            <h3 className="contestHeader">Judges</h3>
            <br></br><br></br>
            <p>Our judges will be a rotating panel of 3-5 individuals, with each judge being both native English/Japanese speaker. The judges will be selected based on their experience with haiku, their ability to judge haiku, and their ability to provide constructive criticism. The judges will be announced at the start of each contest.</p>
    
      </Row>
      <br></br>
        </Container>
        

       
        
  
        </>
    );
}

export default Contests;
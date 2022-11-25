import BlogBanner from "../../../components/blogbanner/BlogBanner";
import "./BlogTemplate.css"

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";

function BlogTemplate(props) {

  const params = useParams();
  let [blogPostData, setBlogPostData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    requestBlog();
  }, [])

  function requestBlog() {
    let id = params.id;
    console.log("test");
    RequestUtils.get("/blog/info?id=" + id) // send out post req and get the response from server
    .then(response => response.json()) // take response and turn it into JSON object
    .then(data => { // data = JSON object created ^^
        if (!data.ok) {
            alert("Blog could not be found!");
            return;
        }
        

        setBlogPostData(data.arr[0]);

    })
    .catch(error => { 
      console.log(error);
    }); 
}

const countEl = document.getElementById('count');

    updateVisitCount();

    function updateVisitCount() {
        fetch(blogPostData.countAPI)
            .then(res => res.json())
            .then(res => {
                countEl.innerHTML = res.value +  " views";
            })
    }


  
  /*
    props: {
        location: {
            state: {
                title: "",
                date: "",
                html: ""
            }
        }
    }
    */

//   let testObj = {
//     _id: "aisdhfioasdf",
//     title: "Title",
//     bannerURL: "https://i.imgur.com/TFQ6tfg.jpeg",
//     date: moment(blogPostData.date),
//     description: "blogDescription",
//     category: "blogCategory",
//     icon: "fa-pencil",
//   };

  return (
    <div>
      <BlogBanner pageInfo={blogPostData} ></BlogBanner>

      <section className="blog-area area-padding">
      <div className="container grey">
            <div style={{paddingLeft: "2vw", paddingRight: "2vw"}}>
           
                <div className="content" dangerouslySetInnerHTML={{__html: blogPostData.html}} />
                <hr></hr>
               
                <p id="count" style={{marginBottom: "-20px"}}>0 Views</p>
            
         
                
            </div>
        </div>
   




      </section>
    </div>
  );
}

export default BlogTemplate;

// <body>

//     <!-- Navbar (sit on top) -->
//     {/* header/navbar */}

//     <section className="hero-banner20">
//         <div className="container">
//             <h2 style="padding-top: 50px; font-family: 'Crimson Text';"><span className="w3-black1"
//                     style="padding-top: 0px; padding-left: 10px; padding-right: 10px;">Why Japanese Lessons are so
//                     Difficult</span></h2>
//             <nav aria-label="breadcrumb" className="banner-breadcrumb">
//                 <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><a style="color: white; ">August 4th, 2022</a></li>
//                 </ol>
//             </nav>
//         </div>
//     </section>

//     <section className="blog-area area-padding">

//         <div id="container">

//             <div className="container">
//                 <div style="padding-left: 2vw; padding-right: 2vw;">
//                     <h5 style="font-family: 'Crimson Text', serif; color: white; padding-left: 10px; padding-right: 10px;"
//                         className=".subhead">This past week I was attending my normal Monday Japanese lesson. As the 50-minute mark hit on the lesson, I began to think to myself <span style="font-style: italic;"> Why is it so difficult to take a Japanese lesson for one hour? Have I lost interest? </span> I found that the answer was not quite what I first thought. Today, I want to cover why exactly I find Japanese lessons so difficult. In general, I’ve always thought this was true; it’s not a new idea but something I’ve noticed more recently. To begin, I want to cover what the lessons actually consist of and how they work.
//                     </h5>
//                     <h5 style="font-family: 'Crimson Text', serif; color: white;">

//                         <span style="text-indent: 40px; padding-right: 40px;display: inline-flex;" className="w3-black1">The
//                             Lessons</span></br></br>
//                         <span style="text-indent: 80px; display: inline-flex;">Lessons typically begin by going over the
//                             past week’s homework. We review specific vocabulary questions for the N4 exam and cover the
//                             specific words that I’m unfamiliar with. For an example, a typical question looks like this:
//                         </span>

//                         <img src="../img/blogs/immersion/mondai.png" alt="teaching"
//                             style="padding: 25px; max-height: 350px;">
//                         <span style="text-indent: 80px; display: inline-flex;">

//                             The homework coming into the lesson itself isn't even that demanding. Usually, it takes me around an hour to complete. After reviewing the work, we move onto the day’s lesson. The daily lesson  always incorporates some specific grammar term. For example, this past week, the term was ないと. We begin by identifying whether I have any knowledge of what the word is. If I don’t, we continue with the lesson as normal, but if I do, we go at a more accelerated pace for the day. These grammar lessons consist of a plethora of exercises. First, I’ll read through a few basic sentences to see if I can identify the meaning on my own. From there, we look at specific conjugation and work on memorizing the different forms. Afterwards, only then is the definition of the grammar particle provided. This forces me to read and understand the idea and form of the particle blindly before understanding the implication. Other times, there is no definition provided, and I have to first come up with the definition on my own and then test if it’s correct. This portion usually takes up to the 35 or 40 minute mark of the lesson. The final portions are always the most draining. We typically cover either reading or writing. Although both are N4 level, doing them after a whole grammar exercise is a test of endurance. Below I’ll attach an image of a sample reading selection:
//                         </span>

//                         <img src="../img/blogs/immersion/readingsel.png" alt="teaching"
//                             style="padding: 25px; max-height: 350px;">

//                         <span style="text-indent: 80px; display: inline-flex;">We do a few reading or listening practice exercises depending on the time left. This is usually the point where I begin to struggle.. The other point I should note is that I complete dozens of one hour classes every week, so, on paper, a one hour Japanese class should pose no issue. However, with Japanese classes there have been instances where I had to cancel, not because I was unavailable, but because I knew I wouldn’t be able to take the mental strain. So what’s the difference between a Japanese class and a different academic class? The immersion factor.

//                         </span>
//                         </br></br></br>
//                         <span style="text-indent: 40px; padding-right: 40px;display: inline-flex;"
//                             className="w3-black1">Immersion—an exprience</span></br></br>
//                         <span style="text-indent: 80px; display: inline-flex;">As mentioned in my previous blogs, the class is conducted in full immersion. I’ve never really thought much of it, but reflecting on it now really uncovers why these classes are so difficult. Even from the very first lesson where I barely knew Japanese, my teacher would speak only Japanese. I specifically recall those classes being completely unbearable; by the 15 minute mark, I was ready to give up. Everyone always speaks of immersion as the best way to learn a language without also detailing the difficulties of it. The way I like to picture immersion is being forced to complete complex calculations in your head. Every time you want to speak, you need to precisely form a series of words in your head beforehand in order to make sense. Even when I’m listening to my teacher, it takes five times the effort to comprehend what she’s saying compared to a normal English spoken class; it’s active listening instead of passive understanding. If I want to go to the bathroom or grab a drink of water, it needs to be in Japanese. Even if I’m trying to make a correction to a homework problem, it’s in Japanese.
//                         </span>
//                         <span style="text-indent: 80px; display: inline-flex;">I also feel that it becomes particularly more difficult in Japanese compared to other languages. For native English speakers, Japanese is extremely different in form, unlike the Romance languages, which are at least somewhat intuitive for English speakers. This is why even though my typical school Spanish class uses full immersion, it’s nothing to the level of full Japanese immersion. Undoubtedly, my skills have exponentially increased, but the mental strain is still there each class. This is why I believe that the 2 hours I have Japanese class a week are some of the hardest hours of the seven days. Though difficult, I still enjoy these hours because struggling while learning is the part where I feel I make the most progress. Without a struggle, I feel like I wouldn’t really be learning anything in these classes.
//                         </span>
//                         </br></br></br>
//                         <span style="text-indent: 40px; padding-right: 40px;display: inline-flex;" className="w3-black1">The
//                             Impact of Immersion</span></br></br>
//                         <span style="text-indent: 80px; display: inline-flex;">Immersion is extremely difficult without a doubt. However, I’ve noticed the greatest impact being an easier workload outside of the classroom. During the class, I pick up new words or phrases that my teacher uses. Without this immersion, I would have to spend more time on WaniKani, Memrise, or other software. I’m essentially exempt from these programs without any big change in learning because of immersion. Sure, I could do them as well and gain even more knowledge, but with immersion, I’m no longer disadvantaged for not doing WaniKani or Memrise. Although I can almost guarantee there have been some instances where I said something without fully understanding the meaning causing my tutor to laugh, these experiences have really propelled my Japanese journey.

//                         </span>
//                         <span style="text-indent: 80px; display: inline-flex;">Immersion for me is like throwing someone into the deep end of a pool and telling them to swim to the other side. With the case of Japanese, this swim to the other side might take 5-7 years, but by the time you're there, you are most likely at least a N2 level speaker. More importantly is the impact of not practicing immersion. Most people get in a few minutes or a single session of immersion a month with listening practices, and this suffices. However, I’ve heard of people speaking for nearly 5 years, learning and staying stuck at the N5 level because they have trouble comprehending spoken Japanese. Thus, come test time, they end up failing the listening section. Additionally, without immersion, I don’t think I would be able to reach my goal of one day going to Japan and being able to survive on my own speaking only Japanese.

//                         </span>

//                         </br></br></br>
//                         <span style="text-indent: 40px; padding-right: 40px;display: inline-flex;"
//                             className="w3-black1">Takeaway
//                         </span></br></br>
//                         <span style="text-indent: 80px; display: inline-flex;">Undoubtedly, Japanese is the hardest class I participate in each week. However, the reason why it’s so difficult is the same reason why Japanese is becoming one of my sharpest skills. Immersion is definitely a process that differs per each person. I know of others who couldn’t handle full immersion and ended up dropping Japanese as a language. If it’s suitable for a learner, though, it’s definitely the best way to learn a language. Despite the difficulty and mental strain, I definitely credit most of my success in Japanese to the immersion practice and highly recommend that others look into it.
//                         </span>
//                         </br></br></br>

//                     </h5>
//                     <h1 id="count" style="color: white">0</h1>
//                     <p style="color: white">Views</p>
//                 </div>
//             </div>
//         </div>

//     </section>
// </body>
// <footer className="footer-area section_gap">
//     <div className="container">
//         <div className="row">
//             <div className="col-lg-4  col-md-6 col-sm-6">
//                 <div className="single-footer-widget">
//                     <h6 style="color: #f08812;">About Me</h6>
//                     <p style="color: white;">
//                         I am a passionate Japanese language learner and culture appreciator. Next summer, I plan to
//                         visit Japan.Like many Japanese learners, I’m trying to further immerse myself in the language,
//                         and I figured the best way is to spend 2 months in Japan. However, I am not perfect.
//                     </p>
//                     <div className=" w3-hide-small">
//                         <a href="../about.html" className="w3-bar-item w3-button w3-hoverColor2"
//                             style="width: 100%; border-radius: 15px;">Read More</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="offset-lg-1 col-lg-5   col-md-6 col-sm-6">
//                 <div className="single-footer-widget">
//                     <h6 style="color: #f08812;">Notifications</h6>
//                     <p style="color: white;">Enter your name and email to receive updates of upcoming blogs!</p>
//                     <div className="" id="mc_embed_signup">

//                         <form target="_blank" action="../email.php" method="post" className="form-inline">

//                             <div className="d-flex flex-row">
//                                 <input className="form-control" name="NAME" placeholder="Enter Name"
//                                     onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name '"
//                                     required="" type="text">
//                                 <input className="form-control" name="EMAIL" placeholder="Enter Email"
//                                     onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
//                                     required="" type="email">
//                                 <button className="click-btn btn btn-default"><i className="ti-arrow-right"></i></button>
//                                 <div style="position: absolute; left: -5000px;">
//                                     <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
//                                         type="text">
//                                 </div>

//                             </div>
//                             <div className="info"></div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-lg-2 col-md-6 col-sm-6">
//                 <div className="single-footer-widget">
//                     <h6 style="color: #f08812;">Site Map</h6>

//                     <ul className="footer-div" style="color: white;">
//                         <li><a href="../index.html">Home</a></li>
//                         <li><a href="../blogpage.html">Blogs</a></li>
//                         <li><a href="../about.html">About</a></li>
//                         <li><a href="../contact.html">Contact</a></li>
//                         <li><a href="#top">Back To Top</a></li>
//                     </ul>
//                 </div>

//             </div>

//         </div>
//     </div>
// </footer>
// <script>
//     const countEl = document.getElementById('count');

//     updateVisitCount();

//     function updateVisitCount() {
//         fetch('https://api.countapi.xyz/update/365ToJapan.com/immersion/?amount=1')
//             .then(res => res.json())
//             .then(res => {
//                 countEl.innerHTML = res.value;
//             })
//     }
// </script>

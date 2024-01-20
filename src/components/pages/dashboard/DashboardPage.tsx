// load theme styles with webpack
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

// Authentication
import { auth } from "../../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Imports
import type { UploadProps } from "antd";
import React, { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import createImagePlugin from "@draft-js-plugins/image";
import { useNavigate } from "react-router";
import { convertToHTML } from "draft-convert";
import moment from "moment";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Datetime from "react-datetime";
import MomentUtils from "../../../utils/MomentUtils";
import {
  ConfigProvider,
  Tabs,
  Modal as AModal,
  Radio,
  Checkbox,
  Button,
  Input,
  Upload,
  Modal
} from "antd";
import BlogDetails from "../../blogdetails/BlogDetails";
// import { Modal } from "react-bootstrap";

// Stylesheets
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./DashboardPage.css";
import "react-datetime/css/react-datetime.css";

// Images
import pageImage from "../../../img/loginDash/greyPAl.jpg";
import PageBanner from "../../pagebanner/PageBanner";

// Image Upload Imports
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../Firebase";
import { v4 } from "uuid";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

function DashboardPage() {
  // CONSTS AND FUNCTIONS
  function hideEventModal() {
    setShowModal(false);
  }

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/${currentFileName + "/" + imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev!, url]);
      });
    });
  };

  const props: UploadProps = {
    name: "file",
    onChange(info) {
      setImageUpload(info.file.originFileObj);
    },
  };

  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const [imageUpload, setImageUpload] = useState<File>();

  const [imageUrls, setImageUrls] = useState<String[]>([]);

  let [newsletter, setNewsletter] = useState(false);

  let [showModal, setShowModal] = useState(false);

  let [currentStartDateTime, setCurrentStartDateTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour").add(1, "hour")
  );

  let [currentID, setCurrentID] = useState("");

  let [currentEventName, setCurrentEventName] = useState("");

  let [currentFileName, setCurrentFileName] = useState("");

  let [currentLocationName, setCurrentLocationName] = useState("");

  let [currentBannerURL, setCurrentBannerURL] = useState("");

  let [currentCategory, setCurrentCategory] = useState("");

  let [currentIcon, setCurrentIcon] = useState("");

  let [message, setMessage] = useState("");

  let [currentPostTime, setCurrentPostTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour").add(1, "hour")
  );

  let [currentEmail, setCurrentEmail] = useState("");

  let [rand, setRand] = useState(0);

  let [listBlogs, setListBlogs] = useState([]);

  let [mainDesc, setMainDesc] = useState("");

  let [postable, setPostable] = useState(true);

  const imagePlugin = createImagePlugin();

  const plugins = [imagePlugin];

  const handPostTimeChange = (newDate: any) => {
    setCurrentPostTime(newDate);
  };

  const handleStartDateTimeChange = (newDate: any) => {
    setCurrentStartDateTime(newDate);
  };

  let step: Datetime.TimeConstraint = {
    step: 15,
    min: 0,
    max: 0,
  };

  let restraint: Datetime.TimeConstraints = { minutes: step };

  // let restraint: Datetime.TimeConstraint = Datetime.TimeConstraints.

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState("_");

  const handleEditorChange = (state: React.SetStateAction<EditorState>) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const createMarkup = (html: string) => {
    return {
      __html: convertedContent,
    };
  };

  let [mail, setMail] = useState("");

  interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
  }

  useEffect(() => {
    setMailer(currentBannerURL, currentEventName, currentPostTime);
  }, [currentBannerURL, currentEventName, currentPostTime, convertedContent]);

  useEffect(() => {
    if (loading) {
      setImageUrls([]);
      populateEvents();
      return;
    }
    if (!user) navigate("/login");
    if (user) {
      setCurrentEmail(user.email!.slice(0, user.email!.indexOf("@")));
      populateEvents();
    }
  }, [user, loading, navigate, currentEmail, rand]);

  // SET NEWSLETTER HTML
  function setMailer(
    currentBannerURL: string,
    currentEventName: string,
    currentPostTime: { format: (arg0: string) => any }
  ) {
    let date = currentPostTime.format("MMMM Do YYYY");
    let desc =
      convertedContent
        .substring(
          convertedContent.indexOf("starter") + 9,
          convertedContent.indexOf("starter") + 295
        )
        .replace(/(<([^>]+)>)/gi, "") + "...";

    setMainDesc(desc);

    setMail(
      '<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="x-apple-disable-message-reformatting"><link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700|Lato:300,400,700" rel="stylesheet"><style>html,body {margin: 0 auto !important; padding: 0 !important;height: 100% !important;width: 100% !important;background: #f1f1f1!important;} * {-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;} div[style*="margin: 16px 0"] {margin: 0 !important;} table {border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;}img {-ms-interpolation-mode:bicubic;}a {text-decoration: none;}*[x-apple-data-detectors], .unstyle-auto-detected-links *,.aBn {border-bottom: 0 !important;cursor: default !important;color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}.a6S {display: none !important;opacity: 0.01 !important;}.im {color: inherit !important;}img.g-img + div {display: none !important;}@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {u ~ div .email-container {min-width: 320px !important;}}@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {u ~ div .email-container {min-width: 375px !important;}}@media only screen and (min-device-width: 414px) {u ~ div .email-container {min-width: 414px !important;}}</style><style>.primary{background: #448ef6;}.bg_white{background: #ffffff;}.bg_light{background: #fafafa;}.bg_black{background: #000000;}.bg_dark{background: rgba(0,0,0,.8);}.email-section{padding:2.5em;}.btn{padding: 5px 15px;display: inline-block;}.btn.btn-primary{border-radius: 30px;background: #FF914D;color: #ffffff;}.btn.btn-white{border-radius: 30px;background: #ffffff;color: #000000;}.btn.btn-white-outline{border-radius: 30px;background: transparent;border: 1px solid #fff;color: #fff;}h1,h2,h3,h4,h5,h6{font-family: "Josefin Sans", sans-serif;color: #000000;margin-top: 0;font-weight: 400;}body{font-family: "Josefin Sans", sans-serif;font-weight: 400;font-size: 15px;line-height: 1.8;color: rgba(0,0,0,.4)!important;}a{color: #448ef6;}.logo{margin: 0;display: inline-block;position: absolute;top: 10px;left: 0;right: 0;margin-bottom: 0;}.logo a{color: #fff!important;font-size: 24px;font-weight: 700;text-transform: uppercase;font-family: "Josefin Sans", sans-serif;display: inline-block;border: 2px solid #fff;line-height: 1.3;padding: 10px 15px 4px 15px;margin: 0;}.logo h1 a span{line-height: 1;}.navigation{padding: 0;}.navigation li{list-style: none;display: inline-block;;margin-left: 5px;font-size: 13px;font-weight: 500;}.navigation li a{color: rgba(0,0,0,.4);}.hero{position: relative;z-index: 0;}.hero .overlay{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: "";width: 100%;z-index: -1;opacity: .3;}.hero .text{color: rgba(255,255,255,.9);}.hero .text h2{color: #fff;font-size: 40px;margin-bottom: 0;font-weight: 600;line-height: 1;text-transform: uppercase;}.hero .text h2 span{font-weight: 600;color: #448ef6;}.heading-section h2{color: #000000;font-size: 28px;margin-top: 0;line-height: 1.4;font-weight: 700;text-transform: uppercase;letter-spacing: 1px;}.heading-section .subheading{margin-bottom: 20px !important;display: inline-block;font-size: 13px;text-transform: uppercase;letter-spacing: 2px;color: rgba(0,0,0,.4);position: relative;}.heading-section .subheading::after{position: absolute;left: 0;right: 0;bottom: -10px;content: "";width: 100%;height: 2px;background: #448ef6;margin: 0 auto;}.heading-section-white{color: rgba(255,255,255,.8);}.heading-section-white h2{line-height: 1;padding-bottom: 0;}.heading-section-white h2{color: #ffffff;}.heading-section-white .subheading{margin-bottom: 0;display: inline-block;font-size: 13px;text-transform: uppercase;letter-spacing: 2px;color: rgba(255,255,255,.4);}/*BLOG*/.blog-entry{border: 1px solid red;padding-bottom: 30px !important;}.text-blog .meta{text-transform: uppercase;font-size: 13px;margin-bottom: 0;}.footer{color: rgba(255,255,255,.5);}.footer .heading{color: #ffffff;font-size: 20px;}.footer ul{margin: 0;padding: 0;}.footer ul li{list-style: none;margin-bottom: 10px;}.footer ul li a{color: rgba(255,255,255,1)!important;}@media screen and (max-width: 500px) {}</style></head><body width="100%" style="margin: 0; padding: 0 !important;"><center style="width: 100%; background-color: #f1f1f1;"><div style="max-width: 600px; margin: 0 auto;" class="email-container"><table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;"><tr><td valign="middle" class="hero bg_white" style="background-color: #36B192; background-size: cover; height: 200px;"><div class="overlay"></div><table><tr><td><div class="text" style="padding: 2em 4em!important; text-align: center;"><h1 class="logo"><a href="https://365tojapan.com/">365toJapan Blogs</a></h1><h2 style="padding-top: 1em!important;">New post!</h2></div></td></tr></table></td></tr><tr><td style="padding-bottom: 30px;"></td></tr></table></td></tr><tr><td class="bg_white"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td><a href="#"><img src=' +
        currentBannerURL +
        ' alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;"></a></td></tr><tr><td class="text-blog" style="text-align: center; padding: 2em 2.5em!important"><p class="meta"><span style="color: rgba(0,0,0,.4)!important;">Posted on ' +
        date +
        '</span></p><h3 style="font-size: 24px;">' +
        currentEventName +
        "</h3> <p>" +
        desc +
        '</p> <p><a href="https://365tojapan.com/blogs" class="btn btn-primary">Read more</a></p></td></tr></table></td></tr></table><table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;"><tr><td valign="middle" class="bg_black footer email-section"><table><tr><td valign="top" width="33.333%" style="padding-top: 20px;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td style="text-align: left; padding-left: 10px;"><h3 class="heading">Directory</h3><ul><li><a href="https://365tojapan.com">Home</a></li><li><a href="https://365tojapan.com/about">About</a></li><li><a href="https://365tojapan.com/blogs">Blogs</a></li><li><a href="https://365tojapan.com/contests">Contests</a></li></ul></td></tr></table></td><td valign="top" width="33.333%" style="padding-top: 20px;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td style="text-align: left; padding-right: 10px;"><h3 class="heading">About</h3><p>365toJapan is a language and culture blog that covers the path of a learner of Japanese in a new and interesting format. The website is by a passionate Japanese language learner and culture appreciator who plans to visit Japan in the future and immerse himself in the Japanese culture. </p></td></tr></table></td></tr></table></td></tr><tr><td valign="middle" class="bg_black footer email-section"><table><tr><td valign="top" width="33.333%"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td style="text-align: left; padding-right: 10px;"><p>&copy; 2023 365toJapan Blogs. All Rights Reserved</p></td></tr></table></td><td valign="top" width="15.333%"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td style="text-align: right; padding-left: 5px; padding-right: 5px;"><p><a href="https://365tojapan.com/unsubscribe" style="color: rgba(255,255,255,.4);">Unsubcribe</a></p></td></tr></table></td></tr></table></td></tr></table></div></center></body></html>'
    );
  }

  // ON DELETE
  function handleDelete(_id: string) {
    let req = {
      _id: _id,
    };

    RequestUtils.post("/blog/delete", req, (user as any).accessToken)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Event could not be deleted!");
          return;
        }
        let listBlogsCopy = listBlogs.filter((blog) => {
          return (blog["_id"] as String).localeCompare(_id) != 0;
        });
        setListBlogs(listBlogsCopy);
      })
      .catch((error) => {
        alert("Something went wrong!");
        console.log(error);
      });
  }

  // ON SHOW TOGGLE
  function handleShow(_id: any) {
    let req = {
      _id: _id,
    };

    RequestUtils.post("/blog/display", req, (user as any).accessToken)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Event could not be deleted!");
          return;
        }
        setRand(Math.random());
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  }

  // ON EDIT
  function handleEdit(_id: string) {
    RequestUtils.get("/blog/info?id=" + _id, (user as any).accessToken)
      .then((response) => response.json()) // take response and turn it into JSON object
      .then((data) => {
        // data = JSON object created ^^
        if (!data.ok) {
          alert("Blog could not be found!");
          return;
        }

        setPostable(false);
        setCurrentID(data.arr[0]["_id"]);
        setCurrentEventName(data.arr[0]["title"]);
        setCurrentFileName(
          "/" +
            data.arr[0]["bannerURL"]
              .toString()
              .substring(
                data.arr[0]["bannerURL"].indexOf("images%2F") + 9,
                data.arr[0]["bannerURL"].lastIndexOf("%2F")
              )
        );
        setCurrentLocationName(data.arr[0]["location"]);
        setCurrentBannerURL(data.arr[0]["bannerURL"]);
        setCurrentCategory(data.arr[0]["category"]);
        setCurrentIcon(data.arr[0]["icon"]);
        setCurrentPostTime(moment(data.arr[0]["date"]));
        setConvertedContent(data.arr[0]["html"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // ON POST
  function postBlog(e?: { preventDefault: () => void } | null | undefined) {
    if (e != null) {
      e.preventDefault();
    }

    let desc =
      convertedContent
        .substring(
          convertedContent.indexOf("starter") + 9,
          convertedContent.indexOf("starter") + 295
        )
        .replace(/(<([^>]+)>)/gi, "") + "...";

    setMainDesc(desc);

    if (
      currentEventName == "" ||
      currentBannerURL == "" ||
      currentPostTime == null ||
      convertedContent == "" ||
      currentCategory == "" ||
      currentIcon == ""
    ) {
      setMessage("Please fill out all fields!");
      return;
    }

    let reqObj = {
      title: currentEventName,
      bannerURL: currentBannerURL,
      date: currentPostTime.format("MM/DD/YY hh:mm A"),
      description: desc,
      location: currentLocationName,
      category: currentCategory,
      icon: currentIcon,
      html: convertedContent,
      show: true,
      newAPI: currentEventName.replace(/[^\w]/g, ""),
      counter: 0,
      newsletter: mail,
      newsletterSent: newsletter,
    };

    RequestUtils.post("/blog/create", reqObj, (user as any).accessToken)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Blog could not be created!");
          return;
        }
        alert("365toJapan Blog Posted!");
      })
      .catch((error) => {
        alert("Something went wrong while posting!");
        console.log(error);
      });
    RequestUtils.post(
      "/blog/createCounter",
      {
        name: currentEventName.replace(/[^\w]/g, ""),
      },
      null
    );
  }

  // SCHEDULED POST
  function postBlogLater(e: any) {
    e.preventDefault();
    var duration = moment.duration(currentStartDateTime.diff(moment()));
    var scheduledTime = currentStartDateTime.format("MM/DD/YY hh:mm A");
    let desc =
      convertedContent
        .substring(
          convertedContent.indexOf("starter") + 9,
          convertedContent.indexOf("starter") + 295
        )
        .replace(/(<([^>]+)>)/gi, "") + "...";

    setMainDesc(desc);

    let reqObj = {
      title: currentEventName,
      bannerURL: currentBannerURL,
      date: currentPostTime.format("MM/DD/YY hh:mm A"),
      description: desc,
      location: currentLocationName,
      category: currentCategory,
      icon: currentIcon,
      html: convertedContent,

      show: true,
      newAPI: currentEventName.replace(/[^\w]/g, ""),
      counter: 0,
      scheduledTime: scheduledTime,
    };

    RequestUtils.post("/blog/postLater", reqObj, (user as any).accessToken)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Blog could not be created!");
          return;
        }
        alert("365toJapan Blog Scheduled!");
      })
      .catch((error) => {
        alert("Something went wrong while posting!");
      });
  }

  // ON EDIT
  function editBlog(e?: any) {
    if (e != null) {
      e.preventDefault();
    }

    if (currentID == "") {
      setMessage("Please select a blog to edit!");
      return;
    }

    let desc =
      convertedContent
        .substring(
          convertedContent.indexOf("starter") + 9,
          convertedContent.indexOf("starter") + 295
        )
        .replace(/(<([^>]+)>)/gi, "") + "...";

    setMainDesc(desc);

    let reqObj = {
      _id: currentID,
      title: currentEventName,
      bannerURL: currentBannerURL,
      date: currentPostTime.format("MM/DD/YY hh:mm A"),
      description: desc,
      location: currentLocationName,
      category: currentCategory,
      icon: currentIcon,
      html: convertedContent,
    };

    RequestUtils.post("/blog/update", reqObj, (user as any).accessToken)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Blog could not be created!");
          return;
        }
        alert("365toJapan Blog Edited!");
      })
      .catch((error) => {
        alert("Something went wrong while posting!");
      });
  }

  // POPULATE BLOG DETAILS
  function populateEvents() {
    RequestUtils.get("/blog/getAll", null)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Blogs could not be populated!");
          return;
        }
        setListBlogs(data.arr);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }

  return (
    <>
      <PageBanner
        image={pageImage}
        title={"Welecome " + currentEmail + "."}
        subtitle="365toJapan Editor"
      />
      <section className="py-5 container">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#01B093",
            },
          }}
        >
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="New Blog" key="1">
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="mb-3 w-25">
                  <Form.Label>Title</Form.Label>
                  <Input
                    type="text"
                    placeholder="Enter blog title"
                    value={currentEventName}
                    onChange={(e) => {
                      setCurrentEventName(e.target.value);
                    }}
                  />
                  {/* <Form.Control
                    type="text"
                    placeholder="Enter blog title"
                    value={currentEventName}
                    onChange={(e) => {
                      setCurrentEventName(e.target.value);
                    }}
                  /> */}
                </Form.Group>

                <Form.Group className="mb-3 w-25">
                  <Form.Label>Location (optional)</Form.Label>
                  <Input
                    type="text"
                    placeholder="Enter blog location"
                    value={currentLocationName}
                    onChange={(e) => {
                      setCurrentLocationName(e.target.value);
                    }}
                  />
                  {/* <Form.Control
                    type="text"
                    placeholder="Enter blog location"
                    value={currentLocationName}
                    onChange={(e) => {
                      setCurrentLocationName(e.target.value);
                    }}
                  /> */}
                </Form.Group>
                <Form.Group className="mb-3 w-25">
                  <Form.Label>Category</Form.Label>
                  <Input
                    type="text"
                    placeholder="i.e. informational"
                    value={currentCategory}
                    onChange={(e) => {
                      setCurrentCategory(e.target.value);
                    }}
                  ></Input>
                  {/* <Form.Control
                    type="text"
                    placeholder="i.e. informational"
                    value={currentCategory}
                    onChange={(e) => {
                      setCurrentCategory(e.target.value);
                    }}
                  /> */}
                </Form.Group>
                <Form.Group className="mb-3 w-25">
                  <Form.Label>Icon</Form.Label>
                  <Input
                    type="text"
                    placeholder="i.e. fa-pencil"
                    value={currentIcon}
                    onChange={(e) => {
                      setCurrentIcon(e.target.value);
                    }}
                  ></Input>
                  {/* <Form.Control
                    type="text"
                    placeholder="i.e. fa-pencil"
                    value={currentIcon}
                    onChange={(e) => {
                      setCurrentIcon(e.target.value);
                    }}
                  /> */}
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Post Time</Form.Label>
                      <Datetime
                        value={currentPostTime}
                        timeConstraints={restraint}
                        onChange={handPostTimeChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3 w-25">
                  <Form.Label>Blog File Storage</Form.Label>
                  <Input
                    type="text"
                    placeholder="Enter file location"
                    value={currentFileName}
                    onChange={(e) => {
                      setCurrentFileName(e.target.value);
                    }}
                  ></Input>
                  {/* <Form.Control
                    type="text"
                    placeholder="Enter file location"
                    value={currentFileName}
                    onChange={(e) => {
                      setCurrentFileName(e.target.value);
                    }}
                  /> */}
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Upload Files</Form.Label>
                  <br></br>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  {/* <Form.Control
                    className="mb-4"
                    type="file"
                    multiple
                    onChange={(event: React.ChangeEvent) => {
                      const target= event.target as HTMLInputElement;
                      const file = target.files![0];
                      console.log(file)
                      setImageUpload(file);
                    }} */}
                  {/* /> */}
                  <Button onClick={uploadFile} className="mt-3">
                    Insert
                  </Button>
                  {imageUrls.map((url) => {
                    return (
                      <>
                        <h6 className="returnLink top">{url}</h6>
                      </>
                    );
                  })}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cover Image URL</Form.Label>
                  <br></br>
                  <Input
                    placeholder="Enter cover image url"
                    value={currentBannerURL}
                    onChange={(e) => {
                      setCurrentBannerURL(e.target.value);
                    }}
                    className="w-25"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Editor</Form.Label>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                  />
                  <Form.Group className="mb-3 form-inline">
                    <Form.Label>HTML Adjustments</Form.Label>
                    <TextArea
                      rows={
                        convertedContent != null
                          ? convertedContent.toString().length / 90
                          : 0
                      }
                      value={convertedContent.replaceAll("</p>", "</P>\n")}
                      onChange={(e) => {
                        setConvertedContent(e.target.value);
                        createMarkup(convertedContent);
                      }}
                    ></TextArea>
                    {/* <Form.Control
                      type="text"
                      as="textarea"
                      rows={
                        convertedContent != null
                          ? convertedContent.toString().length / 90
                          : 0
                      }
                      placeholder="Enter location"
                      value={convertedContent.replaceAll("</p>", "</P>\n")}
                      onChange={(e) => {
                        setConvertedContent(e.target.value);
                        createMarkup(convertedContent);
                      }}
                    /> */}
                  </Form.Group>
                  <pre
                    className="preview"
                    id="prv"
                    dangerouslySetInnerHTML={createMarkup(convertedContent)}
                  ></pre>
                  <br></br>
                  <div className="json">
                    <span className="starter-brace">{"{"}</span>
                    <p>
                      <span className="brace">{'"metadata" : {'}</span>
                      <br></br>
                      <span className="ident">title: </span>
                      {currentEventName ? currentEventName : "null"} <br></br>
                      <span className="ident">bannerURL: </span>{" "}
                      {currentBannerURL ? currentBannerURL : "null"} <br></br>
                      <span className="ident">date:</span>{" "}
                      {currentPostTime.format("MM/DD/YY hh:mm A")} <br></br>
                      <span className="ident">description:</span>{" "}
                      {mainDesc ? mainDesc : "null"} <br></br>
                      <span className="ident">location:</span>{" "}
                      {currentLocationName ? currentLocationName : "null"}{" "}
                      <br></br>
                      <span className="ident">category:</span>{" "}
                      {currentCategory ? currentCategory : "null"} <br></br>
                      <span className="ident">icon:</span>{" "}
                      {currentIcon ? currentIcon : "null"} <br></br>
                      <span className="ident">show:</span> {"true"}
                      <br></br>
                      <span className="ident">counter:</span> {0}
                      <br></br>
                      <span className="brace">{"}"}</span> <br></br>
                      <span className="starter-brace">{"}"}</span>
                    </p>
                  </div>
                  <br></br>
                  <Checkbox disabled={!postable} onChange={(e) => setNewsletter(e.target.checked)}>
                    Newsletter email?
                  </Checkbox>
                </Form.Group>
                <Button disabled={!postable} onClick={(e) => postBlog()}>Post</Button>
                <Button disabled={!postable} className="mx-2" onClick={(e) => setShowModal(true)}>
                  Post Later
                </Button>
                <Button disabled={postable} className="mx-2" onClick={(e) => editBlog()}>
                  Save Edits
                </Button>
                
              </Form>
              <p className="error">{message}</p>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Manage Blogs" key="2">
              <Row>
                {listBlogs.map((props) => {
                  return (
                    <>
                      <Col md={4}>
                        <BlogDetails
                          blogInfo={props}
                          deleteHandler={handleDelete}
                          editHandler={handleEdit}
                          showHandler={handleShow}
                        />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </ConfigProvider>
        <Button
          danger
          onClick={() => {
            navigate("/logout");
          }}
        >
          Logout
        </Button>
      </section>
      <Modal title="Set Time" open={showModal} onCancel={hideEventModal} footer={[]} centered>
          <Form onSubmit={postBlogLater}>
            <Datetime
              value={currentStartDateTime}
              onChange={handleStartDateTimeChange}
            />
            <br></br>
            <Button htmlType="submit" className="mb-3">
              Submit
            </Button>
          </Form>
      </Modal>
    </>
  );
}

export default DashboardPage;

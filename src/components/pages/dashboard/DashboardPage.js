// Authentication
import { auth } from "../../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Imports
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
import { ConfigProvider, Tabs } from "antd";
import BlogDetails from "../../blogdetails/BlogDetails";
import { Button, Modal } from "react-bootstrap";

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
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const [imageUpload, setImageUpload] = useState(null);

  const [imageUrls, setImageUrls] = useState([]);

  let [showModal, setShowModal] = useState(false);

  let [currentStartDateTime, setCurrentStartDateTime] = useState(moment());

  let [currentID, setCurrentID] = useState("");

  let [currentEventName, setCurrentEventName] = useState("");

  let [currentFileName, setCurrentFileName] = useState("");

  let [currentLocationName, setCurrentLocationName] = useState("");

  let [currentBannerURL, setCurrentBannerURL] = useState("");

  let [currentCategory, setCurrentCategory] = useState("");

  let [currentIcon, setCurrentIcon] = useState("");

  let [currentPostTime, setCurrentPostTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour").add(1, "hour")
  );

  let [currentEmail, setCurrentEmail] = useState("");

  let [rand, setRand] = useState(0);

  let [listBlogs, setListBlogs] = useState([]);

  const imagePlugin = createImagePlugin();

  const plugins = [imagePlugin];

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState("_");

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const createMarkup = (html) => {
    return {
      __html: convertedContent,
    };
  };

  useEffect(() => {
    if (loading) {
      setImageUrls([]);
      populateEvents(3);
      return;
    }
    if (!user) navigate("/login");
    if (user) {
      setCurrentEmail(user.email.slice(0, user.email.indexOf("@")));
      populateEvents();
    }
  }, [user, loading, navigate, currentEmail, rand]);

  // ON DELETE
  function handleDelete(_id) {
    let req = {
      _id: _id,
    };

    RequestUtils.post("/blog/delete", req, user.accessToken)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Event could not be deleted!");
          return;
        }
        let listBlogsCopy = listBlogs.filter((blog) => {
          return blog["_id"].localeCompare(_id) != 0;
        });
        setListBlogs(listBlogsCopy);
      })
      .catch((error) => {
        alert("Something went wrong!");
        console.log(error);
      });
  }

  // ON SHOW TOGGLE
  function handleShow(_id) {
    let req = {
      _id: _id,
    };

    RequestUtils.post("/blog/display", req, user.accessToken)
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
  function handleEdit(_id) {
    RequestUtils.get("/blog/info?id=" + _id, user.accessToken)
      .then((response) => response.json()) // take response and turn it into JSON object
      .then((data) => {
        // data = JSON object created ^^
        if (!data.ok) {
          alert("Blog could not be found!");
          return;
        }

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
  function postBlog(e) {
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
    };

    RequestUtils.post("/blog/create", reqObj, user.accessToken)
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
    RequestUtils.post("/blog/createCounter", {
      name: currentEventName.replace(/[^\w]/g, ""),
    });
  }

  // SCHEDULED POST
  function postBlogLater(e) {
    e.preventDefault();
    alert("tes");
    var duration = moment.duration(currentStartDateTime.diff(moment()));
    var scheduledTime = currentStartDateTime.format("MM/DD/YY hh:mm A");
    let desc =
      convertedContent
        .substring(
          convertedContent.indexOf("starter") + 9,
          convertedContent.indexOf("starter") + 295
        )
        .replace(/(<([^>]+)>)/gi, "") + "...";

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

    RequestUtils.post("/blog/postLater", reqObj, user.accessToken)
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
  function editBlog(e) {
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

    RequestUtils.post("/blog/update", reqObj, user.accessToken)
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
  function populateEvents(days) {
    RequestUtils.get("/blog/getAll")
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
      });
  }

  return (
    <>
      <PageBanner image={pageImage} title={"Welecome " + currentEmail + "."} />
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
                  <Form.Control
                    type="text"
                    placeholder="Enter blog title"
                    value={currentEventName}
                    onChange={(e) => {
                      setCurrentEventName(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3 w-25">
                  <Form.Label>Location (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter blog location"
                    value={currentLocationName}
                    onChange={(e) => {
                      setCurrentLocationName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-25">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="i.e. informational"
                    value={currentCategory}
                    onChange={(e) => {
                      setCurrentCategory(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-25">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="i.e. fa-pencil"
                    value={currentIcon}
                    onChange={(e) => {
                      setCurrentIcon(e.target.value);
                    }}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Post Time</Form.Label>
                      <Datetime
                        value={currentPostTime}
                        timeConstraints={{ minutes: { step: 5 } }}
                        onChange={setCurrentPostTime}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Blog File Storage</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter file location"
                    value={currentFileName}
                    onChange={(e) => {
                      setCurrentFileName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Upload Files</Form.Label>
                  <Form.Control
                    className="mb-4"
                    type="file"
                    multiple
                    onChange={(event) => {
                      setImageUpload(event.target.files[0]);
                    }}
                  />
                  <Button onClick={uploadFile}>Insert</Button>
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
                  <Form.Control
                    type="text"
                    placeholder="Enter cover image url"
                    value={currentBannerURL}
                    onChange={(e) => {
                      setCurrentBannerURL(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>HTML insert</Form.Label>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    plugins={plugins}
                  />
                  <Form.Group className="mb-3 form-inline">
                    <Form.Label>HTML Adjustments</Form.Label>
                    <Form.Control
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
                    />
                  </Form.Group>
                  <pre
                    className="preview"
                    id="prv"
                    dangerouslySetInnerHTML={createMarkup(convertedContent)}
                  ></pre>
                </Form.Group>
                <Button
                  onClick={(e) => postBlog()}
                  variant="primary"
                  type="submit"
                >
                  Post
                </Button>
                <Button
                  className="mx-2"
                  onClick={(e) => editBlog()}
                  variant="primary"
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  className="mx-2"
                  onClick={(e) => setShowModal(true)}
                  variant="primary"
                  type="submit"
                >
                  Post Later
                </Button>
              </Form>
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
        <br />
        <button
          className="btn pr-3 btn-outline-danger"
          onClick={() => {
            navigate("/logout");
          }}
        >
          Logout
        </button>
      </section>
      <Modal show={showModal} onHide={hideEventModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Set Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postBlogLater}>
            <Datetime
              value={currentStartDateTime}
              onChange={setCurrentStartDateTime}
            />
            <br></br>
            <Button variant="outline-success" type="submit" className="mb-3">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DashboardPage;

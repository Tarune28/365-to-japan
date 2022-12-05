
// auth
import {
  auth,
} from "../../../Firebase";

import RequestUtils from "../../../utils/RequestUtils";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import createImagePlugin from '@draft-js-plugins/image';
// compontents & functionality

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import pageImage from "../../../img/loginDash/mountains.jpg";
import PageBanner from "../../pagebanner/PageBanner";
import "react-datetime/css/react-datetime.css";
import { convertToHTML } from 'draft-convert';
import "./DashboardPage.css";
import { Space, Table, Tag } from 'antd';

//image upload
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../../Firebase";
import { v4 } from "uuid";

import { Button, FormCheck } from "react-bootstrap";
import moment from "moment";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Datetime from "react-datetime";
import MomentUtils from "../../../utils/MomentUtils";
import { ConfigProvider, Tabs } from "antd";
import BlogDetails from "../../blogdetails/BlogDetails";

function DashboardPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // file organization in firebase
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${currentFileName + '/' + imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  // STATE HOOKS FOR DB ENTRY
  let [currentEventName, setCurrentEventName] = useState("");

  let [currentFileName, setCurrentFileName] = useState("");

  let [currentLocationName, setCurrentLocationName] = useState("");

  let [currentBannerURL, setCurrentBannerURL] = useState("");

  let [currentCategory, setCurrentCategory] = useState("");

  let [currentIcon, setCurrentIcon] = useState("");

  let [currentPostTime, setCurrentPostTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour").add(1, "hour")
  );


  
  let [listBlogs, setListBlogs] = useState([]);
  // let _contentState = ContentState.createFromText('Sample content state');
  // const raw = convertToRaw(_contentState)
  // const [contentState, setContentState] = useState(raw)
  const imagePlugin = createImagePlugin();
  const plugins = [imagePlugin];



  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState("_");
  

  const handleEditorChange = (state) => {
    setEditorState(state);

    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    console.log(currentContentAsHTML)
    setConvertedContent(currentContentAsHTML);
  }


  const createMarkup = (html) => {

    return {
      __html: convertedContent

      //__html: DOMPurify.sanitize(html)
    }
  }

  // content to html
  // input html

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);




  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      setImageUrls([]);
      populateEvents(3);

      return;
    }
    if (!user) navigate("/login");
  }, [user, loading, navigate]);


  function handleDelete(_id) {
    // Take the _id of the calendar event
    // Remove the event from the list of calendar events
    let req = {
        _id: _id
    }

    RequestUtils.post("/blog/delete", req)
    .then(response => response.json())
    .then(data => {
        if (!data.ok) {
            alert("Event could not be deleted!");
            return;
        }

        let listBlogsCopy = listBlogs.filter((blog) => {
            return((blog["_id"]).localeCompare(_id) != 0);
        });

        setListBlogs(listBlogsCopy);
        
        // Also remove it from listOldEvents just in case handleDelete is being called from oldCalendarEvent
      //  removeOldCalendarEvent(_id);
    })
    .catch(error => {
        alert("Something went wrong!");
    });
}

  function postBlog(e) {
    if (e != null) {
      e.preventDefault();
    }
    fetch("https://api.countapi.xyz/create?namespace=365ToJapan.com&key=" + currentEventName.replace(/[^A-Z0-9]/ig, "") + "R&value=0")

    let callBack = "https://api.countapi.xyz/update/365ToJapan.com/" + currentEventName.replace(/[^A-Z0-9]/ig, "") + "R/?amount=1"

    let desc = convertedContent.substring(convertedContent.indexOf("starter") + 9, convertedContent.indexOf("starter") + 295).replace( /(<([^>]+)>)/ig, '');
    let reqObj = {
      title: currentEventName,
      bannerURL: currentBannerURL,
      date: currentPostTime.format('MM/DD/YY hh:mm A'),
      description: desc,
      location: currentLocationName,
      category: currentCategory,
      icon: currentIcon,
      html: convertedContent,
      countAPI: callBack
    }

    RequestUtils.post("/blog/create", reqObj) // send out post req and get the response from server
      .then(response => response.json()) // take response and turn it into JSON object
      .then(data => { // data = JSON object created ^^
        if (!data.ok) {
          alert("Blog could not be created!");
          return;
        }
        alert("365toJapan Blog Posted!");


      })
      .catch(error => {
        alert("Something went wrong while posting!");
      });
  }

  function populateEvents(days) {
 
    let req = days;
    RequestUtils.get("/blog/getCards?days=" + 20) // send out post req and get the response from server
    .then(response => response.json()) // take response and turn it into JSON object
    .then(data => { // data = JSON object created ^^
        if (!data.ok) {
            alert("Blogs could not be populated!");
            return;
        }
        console.log(data.arr);
        setListBlogs(data.arr);
  

    })
    .catch(error => { 
        alert(error);
    }); 
}

  return (
    <>

      <PageBanner image={pageImage} title="Administrative Login." />
      <section style={{ padding: "50px" }}>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#01B093',
            },
          }}
        >
          <Tabs defaultActiveKey="1" onTabClick={console.log("yo")}>
            <Tabs.TabPane tab="New Blog" key="1">
              <Form onSubmit={e => e.preventDefault()}>
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
                    placeholder="Enter blog title"
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
                  {/* implement this and submit to server*/}
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

                  <Form.Control className="mb-4" type="file" multiple onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }} />
                  <Button onClick={uploadFile}>Insert</Button>
                  {imageUrls.map((url) => {
                    return <><h6 className="returnLink top">{url}</h6></>;
                  })}
                </Form.Group>

                <Form.Group className="mb-3">
                  {/* implement this and submit to server*/}
                  <Form.Label>Cover Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={currentBannerURL}
                    onChange={(e) => {
                      setCurrentBannerURL(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  {/* implement this and submit to server*/}





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
                    {/* implement this and submit to server*/}
                    <Form.Label>HTML Adjustments</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={convertedContent != null ? (convertedContent.toString().length) / 90 : 0}
                      placeholder="Enter location"
                      value={convertedContent.replaceAll("</p>", "</p> \n")}
                      onChange={(e) => {
                        setConvertedContent(e.target.value);
                        createMarkup(convertedContent);
                      }}
                    />
                  </Form.Group>


                  <pre className="preview" id="prv" dangerouslySetInnerHTML={createMarkup(convertedContent)}></pre>

                  {/* <pre>
            {JSON.stringify(
              convertToRaw(this.state.contentState.getCurrentContent()),
              null,
              "  "
            )}
          </pre>
 */}







                </Form.Group>

                <Button onClick={e => postBlog()
                } variant="primary" type="submit">
                  Post
                </Button>
              </Form>

            </Tabs.TabPane>
            <Tabs.TabPane tab="Manage Blogs" key="2">
          
              {
                
                listBlogs.map((props) => {
                    // Code that runs for each element
                    // TODO: Create delete handler
                    return (
                      <>
                      
                        <BlogDetails blogInfo={props} deleteHandler={handleDelete}/>
                        </>
                    );
                })
                
                }
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
    </>
  );
}

export default DashboardPage;


// auth
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../Firebase";

import { ContentState, convertToRaw } from 'draft-js';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import createImagePlugin from '@draft-js-plugins/image';
// compontents & functionality

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import LogoutPage from "../login/LogoutPage";
import pageImage from "../../../img/loginDash/mountains.jpg";
import PageBanner from "../../pagebanner/PageBanner";
import "react-datetime/css/react-datetime.css";
import DOMPurify from 'dompurify';
import { convertToHTML } from 'draft-convert';

//image upload
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../Firebase";
import { v4 } from "uuid";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Datetime from "react-datetime";
import MomentUtils from "../../../utils/MomentUtils";

function DashboardPage() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();


  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");


  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${currentFileName + '/' + imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
 
  // function getContent() {
  //   alert(JSON.stringify(
  //     convertToRaw(contentState.getCurrentContent()),
  //     null,
  //     "  "
  //   ))
  // }

  let [currentEventName, setCurrentEventName] = useState("");

  let [currentFileName, setCurrentFileName] = useState("");

  let [currentLocationName, setCurrentLocationName] = useState("");

  let [currentKeepEvent, setCurrentKeepEvent] = useState(false);

  let [currentStartDateTime, setCurrentStartDateTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour")
  );

  let [currentEndDateTime, setCurrentEndDateTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour").add(1, "hour")
  );

  // let _contentState = ContentState.createFromText('Sample content state');
  // const raw = convertToRaw(_contentState)
  // const [contentState, setContentState] = useState(raw)
  const imagePlugin = createImagePlugin();
  const plugins = [imagePlugin];



  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const  [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  
  const createMarkup = (html) => {
    
    return  {
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
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading, navigate]);

  return (
    <>
      <PageBanner image={pageImage} title="Administrative Login." />
      <section style={{ padding: "50px" }}>
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
              value={currentEventName}
              onChange={(e) => {
                setCurrentEventName(e.target.value);
              }}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Post Time</Form.Label>
                <Datetime
                  value={currentEndDateTime}
                  timeConstraints={{ minutes: { step: 5 } }}
                  onChange={setCurrentEndDateTime}
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
        }}/>
            <Button onClick={uploadFile}>Insert</Button>
            {imageUrls.map((url) => {
        return <p>{url}</p>;
      })}
          </Form.Group>

          <Form.Group className="mb-3">
            {/* implement this and submit to server*/}
            <Form.Label>Cover Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={currentLocationName}
              onChange={(e) => {
                setCurrentLocationName(e.target.value);
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
      <pre>{convertedContent}</pre>
      <Form.Group className="mb-3">
            {/* implement this and submit to server*/}
            <Form.Label>HTML Adjustments</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={convertedContent}
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

          <Button onClick={e => alert(this.state.contentState.getCurrentContent)
            } variant="primary" type="submit">
            Post
          </Button>
        </Form>

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

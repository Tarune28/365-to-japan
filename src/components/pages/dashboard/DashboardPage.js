
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

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

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

  let [listEvents, setListEvents] = useState([]);

  let [listOldEvents, setListOldEvents] = useState([]);

  let [showModal, setShowModal] = useState(false);

  let [showOldEvents, setShowOldEvents] = useState(false);

  let [editing, setEditing] = useState(false);

  let [currentEventId, setCurrentEventId] = useState("");

  let [currentEventName, setCurrentEventName] = useState("");

  let [currentLocationName, setCurrentLocationName] = useState("");

  let [currentKeepEvent, setCurrentKeepEvent] = useState(false);

  let [currentStartDateTime, setCurrentStartDateTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour")
  );

  let [currentEndDateTime, setCurrentEndDateTime] = useState(
    MomentUtils.roundUp(moment(new Date()), "hour").add(1, "hour")
  );

  let _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw)
  const imagePlugin = createImagePlugin();
  const plugins = [imagePlugin];

  // content to html
  // input html



  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading, navigate]);

  return (
    <>
      <PageBanner image={pageImage} title="Administrative Login." />
      <section style={{ padding: "50px" }}>
        <Form>
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

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Upload Files</Form.Label>
            <Form.Control className="mb-3" type="file" multiple />
            <Button onClick={console.log("nothing")}>Insert an image</Button>
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
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        plugins={plugins}

       
      />
  <button onClick={console.log("nothing")}>Insert an image</button>
          {/* <pre>
            {JSON.stringify(
              convertToRaw(this.state.contentState.getCurrentContent()),
              null,
              "  "
            )}
          </pre> */}






      
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Enter location"
              value={currentLocationName}
              onChange={(e) => {
                setCurrentLocationName(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
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

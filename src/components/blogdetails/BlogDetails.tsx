import Card from "react-bootstrap/Card";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Button from "react-bootstrap/Button";
import {Button} from "antd";
import "./BlogDetails.css";

function BlogDetails(props: { blogInfo: { [x: string]: any; }; deleteHandler: (arg0: any) => void; editHandler: (arg0: any) => void; showHandler: (arg0: any) => void; }) {
  return (
    <Card className="my-3 rounded1 py-1 px-2">
      <Card.Body>
        <Card.Title>{props.blogInfo["title"]}</Card.Title>
        <ButtonToolbar>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button
              danger
              onClick={() => {
                props.deleteHandler(props.blogInfo["_id"]);
              }}
            >
              Delete
            </Button>
            <Button
              className="btn-grey mx-2"
              onClick={() => {
                props.editHandler(props.blogInfo["_id"]);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                props.showHandler(props.blogInfo["_id"]);
              }}
            >
              {props.blogInfo["show"] ? "Hide" : "Show"}
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

export default BlogDetails;

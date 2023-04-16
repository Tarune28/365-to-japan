import Card from "react-bootstrap/Card";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'
import "./BlogDetails.css";

function BlogDetails(props) {
    
    return (
        <Card className="my-3 rounded1 py-1 px-2">
            <Card.Body>
                <Card.Title>{props.blogInfo["title"]}</Card.Title>
            


                <ButtonToolbar>
              
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <button className="btn pr-3  btn-outline-danger" onClick={() => { props.deleteHandler(props.blogInfo["_id"]) }}>Delete</button>
                        <button className="btn pr-3  btn-outline-secondary" onClick={() => { props.editHandler(props.blogInfo["_id"]) }}>Edit</button>
                        <button className={props.blogInfo["show"] ? "btn pr-3  btn-outline-primary" : "btn pr-3  btn-outline-success"} onClick={() => { props.showHandler(props.blogInfo["_id"]) }}>{props.blogInfo["show"] ? "Hide" : "Show" }</button>
                    </ButtonGroup>
                </ButtonToolbar>


            </Card.Body>
        </Card>
    );
}

export default BlogDetails;
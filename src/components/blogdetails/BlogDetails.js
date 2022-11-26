import Card from "react-bootstrap/Card";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

function BlogDetails(props) {
    
    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Title>{props.blogInfo["title"]}</Card.Title>
            


                <ButtonToolbar>
              
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <button className="btn pr-3  btn-outline-danger" onClick={() => { props.deleteHandler(props.blogInfo["_id"]) }}>delete</button>
                    </ButtonGroup>
                </ButtonToolbar>


            </Card.Body>
        </Card>
    );
}

export default BlogDetails;
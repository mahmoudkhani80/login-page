import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./App.css";
import FormComponent from "./components/FormComponent";
import PasswordForm from "./components/PasswordForm";
import TagsInput from "./components/TagsInput";
import Submit from "./components/Submit";
import myImage from "./myimage.jpg";

function login() {
  return (
    <div className="wrapper">
      <Container className="back-ground-white">
        <Row>
          {/* blue part */}
          <Col className="blue-side white-text">
            <div className="">
              <strong>FLEESO</strong>
              <div className="blue-text-section"> 
                <h1>
                  Start your
                  <br />
                  journey with us
                </h1>
                <p className="grey-text">
                  Discover the world's best
                  <br />
                  community of freelancers and <br />
                  business owners.
                </p>
              </div>
              <div className="comment">
                <p className="grey-text">
                  simply unbelievable! i am really satisfied
                  <br />
                  with my projects and business. This is
                  <br />
                  Absolutely wonderful!
                </p>
                <div className="comment-info">
                  <img
                    className="image-radius"
                    src={myImage}
                    alt="my image"
                    width="50px"
                    height="50px"
                  ></img>
                  <div>
                    <strong className="">ali mahmoudkhani</strong>
                    <p className="grey-text">freelancer</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* input part */}
          <Col xs={7}>
            <h1>Sign up</h1>
            <p>
              Have an account?<span className="blue-text">Login</span>
            </p>
            <p>Looking for?</p>
            {/* radio buttons */}
            <Row className="radio-container">
              <div className="border-for-inputs radio-button-left">
                <input type="radio" value="projects" name="looking-for" />{" "}
                Projects
              </div>
              <div className="border-for-inputs radio-button-right">
                <input type="radio" value="designs" name="looking-for" />{" "}
                Designs
              </div>
            </Row>
            <Row>
              <div>
                <FormComponent />
              </div>
            </Row>
            <Row>
              <div>
                <PasswordForm />
              </div>
            </Row>
            <Row>
              <div>
                <strong>enter your skills</strong>
                <div className="border-for-inputs">
                  <TagsInput />
                </div>
              </div>
            </Row>
            <Row>
              <div>
                <Submit />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default login;

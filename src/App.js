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
      <Container className="bgw">
        <Row>
          {/* blue part */}
          <Col className="blue-container">
            <div className="bg-primary blue-border">
              <strong>FLEESO</strong>
              <div>
                <h1>
                  Start your
                  <br />
                  journey with us
                </h1>
              </div>
              <div>
                <p>
                  Discover the world's best
                  <br />
                  community of freelancers and <br />
                  business owners.
                </p>
              </div>
              <Container>
                <Row>
                  <p>
                    simply unbelievable! i am really satisfied
                    <br />
                    with my projects and business. This is
                    <br />
                    Absolutely wonderful!
                  </p>
                </Row>
                <Row className="image">
                  <img
                    className="image-radius"
                    src={myImage}
                    alt="my image"
                    width="5px"
                    height="100px"
                  ></img>
                  <div>
                    <strong>ali mahmoudkhani</strong>
                    <p>freelancer</p>
                  </div>
                </Row>
              </Container>
            </div>
          </Col>

          {/* input part */}
          <Col xs={7}>
            <h1>Sign up</h1>
            <p>
              Have an account?<span className="blue-text">Login</span>
            </p>

            {/* radio buttons */}
            <Row className="radio-container">
              <div className="border">
                <input type="radio" value="projects" name="looking-for" />{" "}
                Projects
              </div>
              <div className="border">
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
                <div className="border">
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

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./App.css";
import FormComponent from "./components/FormComponent";
import PasswordForm from "./components/PasswordForm";
import TagsInput from "./components/TagsInput";
import Submit from './components/Submit';

function login() {
  return (
    <Container className="bg-secondary vh-100">
      <Row>
        {/* blue part */}
        <Col className="bg-primary vh-100">
          <h1>hi</h1>
        </Col>

        {/* input part */}
        <Col xs={7}>
          <h1>Sign up</h1>
          <p>
            Have an account?<span className="blue-text">Login</span>
          </p>

          {/* radio buttons */}
          <Row>
            <div>
              <input type="radio" value="projects" name="looking-for" />{" "}
              Projects
              <input type="radio" value="designs" name="looking-for" /> Designs
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
              <TagsInput />
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
  );
}

export default login;

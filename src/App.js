import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./App.css";
import FormComponent from "./components/FormComponent";
import PasswordForm from "./components/PasswordForm";
import TagsInput from "./components/TagsInput";
import Submit from "./components/Submit";
import myImage from "./myimage.jpg";
import RadioButtons from "./components/RadioButtons";
import ThreeDot from "./components/ThreeDot"

function login() {
  return (
    <div className="container">
      <div className="bigbox radius">
        {/* blue part */}
        <div className="blue-section radius white-text">
          <div className="inside-blue-section">
            <strong>FLEESO</strong>
            <div className="">
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
            <div className="comment-section radius">
              <p className="grey-text">
                simply unbelievable! i am really satisfied
                <br />
                with my projects and business. This is
                <br />
                Absolutely wonderful!
              </p>
              <div className="comment-profile">
                <img
                  className=""
                  src={myImage}
                  alt="my image"
                  width="50px"
                  height="50px"
                ></img>
                <div>
                  <strong className="">ali mahmoudkhani</strong>
                  <p className="short-size grey-text">freelancer</p>
                </div>
              </div>
            </div>
            <ThreeDot/>
          </div>
        </div>

        <div className="white-section">
          {/* input part */}
          <h2>Sign up</h2>
          <p>
            Have an account?<a href="#">Login</a>
          </p>
          {/* radio buttons */}
          <div>
            <RadioButtons />
          </div>
          {/* <Email Input /> */}
          <div>
            <FormComponent />
          </div>
          {/* <Password Input /> */}
          <div>
            <PasswordForm />
          </div>
          {/* skills input */}
          <div>
            <TagsInput />
          </div>
          <div>
            <Submit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

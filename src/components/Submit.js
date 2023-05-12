import React from "react";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";
import TagsInput from "./TagsInput";
import RadioButtons from "./RadioButtons";
import Radio from "./RadioButtons";

function SubmitButton(props) {
  function handleSubmit(event) {
    event.preventDefault();
    // if (props.option === undefined) {
    //   console.log(props.option);
    // } else {
    //   console.log("failed");
    // }
    // <RadioButtons />
    // <EmailForm />
    // <PasswordForm />
    // <TagsInput />
  }

  return (
    <>
    
      {/* <Form/> */}
      {/* radio buttons */}
      <RadioButtons project='project' design='design'/>
      {/* <Email Input /> */}
      {/* <EmailForm /> */}
      {/* <Password Input /> */}
      {/* <PasswordForm /> */}
      {/* skills input */}
      {/* <TagsInput /> */}
      <div>
        <button
          type="submit"
          value="submit"
          onClick={handleSubmit}
          className="submit white-text"
        >
          Create-account
        </button>
      </div>
    </>
  );
}

export default SubmitButton;

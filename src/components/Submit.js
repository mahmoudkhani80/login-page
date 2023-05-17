import React, { useState } from "react";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";
import TagsInput from "./TagsInput";
import RadioButtons from "./RadioButtons";

function SubmitButton() {
  const [option, setOption] = useState(null);
  const [OptionerrorMsg, setOptionErrorMsg] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [tagsInputerrorMsg, setTagsInputErrorMsg] = useState("");
  // const [Email, setEmail] = useState("");
  // const [EmailerrorMsg, setEmailErrorMsg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // radio buttons
    if (option === "project" || "design") {
      setOptionErrorMsg("");
      // console.log(option);
    }
    if (option === null) {
      setOptionErrorMsg("please select one option.");
      // console.log(option);
    }
    // end of radio buttons

    // tags input
    if (tagsInput.length === 0) {
      setTagsInputErrorMsg("please enter tags.");
    }
    else{
      setTagsInputErrorMsg("");
    }



    // email (for after submit validation)

    // if (!isValidEmail(Email)) {
      // console.log(Email);
      // setEmailErrorMsg("please enter email address");
      // return;
    // }
    // if (isValidEmail(Email)) {
      // console.log(Email);
      // setEmailErrorMsg("");
    // }
    // end of email
  }
  // console.log(setEmailErrorMsg);
  function handleOption(option) {
    setOption(option);
  }
  function handleTagsIput(tagsInput) {
    setTagsInput(tagsInput);
  }
  // (for after submit validation)
  // function handleEmail(event) {
  //   setEmail(event.target.value);
  // }
  // const isValidEmail = (Email) => {
  //   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   return emailRegex.test(Email);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* radio buttons */}
        <RadioButtons error={OptionerrorMsg} option={handleOption} />
        {/* <Email Input /> */}
        <EmailForm 
        // (for after submit validation)
        // error={EmailerrorMsg} onChange={handleEmail}
         />
        {/* <Password Input /> */}
        <PasswordForm />
        {/* skills input */}
        <TagsInput error={tagsInputerrorMsg} tagsInput={handleTagsIput}/>
      </form>
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

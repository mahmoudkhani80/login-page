import React, { useState } from "react";

function Email(props) {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const error = props.error;
  // function handleEmailChange(e) {
  //   const value = e.target.value;
  //   setEmail(value);

  // }
    // if (!isValidEmail(value)) {
    //   setErrorMsg('Please enter a valid email address.');
    // } else {
    //   setErrorMsg('');
    // }
  

  // function isValidEmail(value) {
  //   // Use a regular expression (regex) to validate the email input
  //   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   return emailRegex.test(value);
  // }

  return (
    <div>
      <div className="input-layout">
        <label>
          <strong className="grey-text">Email</strong>
        </label>
        <input type="email" name="email" onChange={props.onChange} className="border-for-inputs" />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
export default Email;
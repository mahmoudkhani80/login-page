import React, { useState } from "react";

function Email() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);

    if (!isValidEmail(value)) {
      setErrorMsg("Please enter a valid email address.");
    } else {
      setErrorMsg("");
    }
  }

  function isValidEmail(value) {
    // Use a regular expression (regex) to validate the email input
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(value);
  }

  return (
    <div>
      <div className="input-layout">
        <label>
          <strong className="grey-text">Email</strong>
        </label>
        <input
          type="email"
          name={email}
          onChange={handleEmailChange}
          className="border-for-inputs"
        />
        <p className="error">{errorMsg}</p>
        <div className="input-layout">
          <label>
            <strong className="grey-text">Password</strong>
          </label>
          <input
            type="password"
            name="password"
            className="border-for-inputs"
          />
        </div>
      </div>
    </div>
  );
}
export default Email;

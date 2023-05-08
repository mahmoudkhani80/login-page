import React, { useState } from "react";
function PassWord() {
  const [password, setPassWord] = useState("");
  const [PassWorderrorMsg, setPassWordErrorMsg] = useState("");

  function handlePassWordChange(p) {
    const pass = p.target.pass;
    setPassWord(pass);

    if (!isValidPassWord(pass)) {
      setPassWordErrorMsg("Please enter a valid password.");
    } else {
      setPassWordErrorMsg("");
    }
  }

  function isValidPassWord(pass) {
    // Use a regular expression (regex) to validate the PassWord input
    const PassWordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/;
    return PassWordRegex.test(pass);
  }

  return (
    <div className="input-layout">
      <label>
        <strong className="grey-text">Password</strong>
      </label>
      <input type="password" name={password} onChange={handlePassWordChange} link className="border-for-inputs" />
      <p className="error">{PassWorderrorMsg}</p>
    </div>
  );
}

export default PassWord;

import React, { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const regex = /^(?=.*[a-zA-Z]).{8,}$/; // regex that matches at least 8 characters combined with numbers
    const passwordValue = event.target.value;

    setPassword(passwordValue);
    setIsValid(regex.test(passwordValue));
  };

  return (
    <div className="input-layout">
      <label>
        <strong className="grey-text">Password</strong>
      </label>
      <input
        type="password"
        onChange={handleChange}
        value={password}
        className="border-for-inputs"
      />
      {isValid ? null : (
        <p className="error">Password must be at least 8 characters.</p>
      )}
    </div>
  );
}

export default PasswordInput;

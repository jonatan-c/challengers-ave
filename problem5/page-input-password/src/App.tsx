import React, { useState, ChangeEvent } from "react";
import "./App.css";

const App: React.FC = () => {
  const [password, setPassword] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isValidLength = password.length >= 8;

  return (
    <div className="app">
      <h1>Password Validator</h1>
      <div className="password-input">
        <label>Password:</label>
        <input type="password" value={password} onChange={handleChange} />
      </div>
      <div className="conditions">
        <p>Password must contain the following</p>
        <p>
          <span className={hasLowercase ? "valid-icon" : "invalid-icon"}>
            {hasLowercase ? "✔" : "✗"}
          </span>
          A lowercase letter
        </p>
        <p>
          <span className={hasUppercase ? "valid-icon" : "invalid-icon"}>
            {hasUppercase ? "✔" : "✗"}
          </span>
          A capital (uppercase) letter
        </p>
        <p>
          <span className={hasNumber ? "valid-icon" : "invalid-icon"}>
            {hasNumber ? "✔" : "✗"}
          </span>
          A number
        </p>
        <p>
          <span className={isValidLength ? "valid-icon" : "invalid-icon"}>
            {isValidLength ? "✔" : "✗"}
          </span>
          Minimum 8 characters
        </p>
      </div>
    </div>
  );
};

export default App;

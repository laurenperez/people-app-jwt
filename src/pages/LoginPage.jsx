import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    // TODO: write the handleChange logic with setFormState
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // TODO: handle sucessful signup/login by setting user state for entire app
    } catch (err) {
      // Use something other than an alert in production code
      alert("Invalid Credentials!");
    }
  }

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <legend>Log In</legend>
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={formState.password}
          name="password"
          onChange={handleChange}
        />
        <div className="form-controls">
          <button>Log In</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

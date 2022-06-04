import { useState } from "react";
import { Link } from "react-router-dom";
// import { signup } from '../../services/userService'
const signup = (thing) => {
  console.log(thing);
};

function SignupForm(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  function handleChange(e) {
    props.updateMessage("");
    setFormState((prevState) => ({
      // Using ES2015 Computed Property Names
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(formState);
      // Successfully signed up - show Index
      props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  }

  function isFormInvalid() {
    return !(
      formState.name &&
      formState.email &&
      formState.password === formState.passwordConf
    );
  }
  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <legend>Sign Up</legend>
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          name="name"
          onChange={handleChange}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={formState.passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
        <div className="form-controls">
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;

import Header from "./components/Header";
import Main from "./components/Main";
// TODO : import logout function
// TODO: import get user function
import { useState } from "react";

function App(props) {
  // TODO: Check for token on page load, set default state
  const [userState, setUserState] = useState({ user: "?" })

  function handleSignupAndLogIn() {
    // TODO : set the state of the app with the logged in user
  }

  function handleLogout() {
    // TODO : create a logout function to remove user token
    setUserState({ user: null });
  }

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
      <Main user={userState.user} handleSignupAndLogIn={handleSignupAndLogIn} />
    </div>
  );
}

export default App;

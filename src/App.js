import Header from "./components/Header";
import Main from "./components/Main";
import { getUser, logout } from "./services/signup";
import { useState } from "react";

function App(props) {
  const [userState, setUserState] = useState({ user: getUser() })

  function handleSignup() {
    setUserState({ user: getUser() });
  }

  function handleLogout() {
    logout(); // TODO : create this fucntion
    setUserState({ user: null });
  }

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
      <Main user={userState.user} handleSignup={handleSignup} />
    </div>
  );
}

export default App;

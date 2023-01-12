import Header from "./components/Header";
import Main from "./components/Main";
import { getUserFromToken } from "./services/tokenService"
import { logout } from "./services/signupService"

import { useState } from "react";

function App(props) {
  const [userState, setUserState] = useState({ user: getUserFromToken() })

  function handleSignupAndLogIn() {
    let user = getUserFromToken();
    console.log("****************" + user);
    setUserState({ user: getUserFromToken() })
  }

  function handleLogout() {
    logout()
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

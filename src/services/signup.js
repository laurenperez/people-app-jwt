import CONFIG from "../config/index";
import { setToken, getUserFromToken, removeToken } from "./tokenService"

function signup(user) {
  return fetch(`${CONFIG.DEV.URL}/users/signup`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error("Email already taken!");
    })
    .then(({token}) => setToken(token));
}

function getUser() {
  return getUserFromToken()
}

function logout() {
  removeToken()
}

export {
  signup,
  getUser,
  logout
}

import CONFIG from "../config/index";
// TODO: import set token function
// TODO: import remove token function

async function signup(formData) {
  let response = await fetch(`${CONFIG.DEV.URL}/users/signup`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(formData),
  })
  console.log(response);
  // TODO: return Error if no token
  //TODO: set the token in local storage to "login" the user
}


async function login(formData) {
  let response = await fetch(`${CONFIG.DEV.URL}/users/login`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(formData),
  });
  console.log( response )
  // TODO: return Error if no token
  //TODO: set the token in local storage to "login" the user
}



function logout() {
  // TODO: remove token from local storage to prevent access to protected routes
}

export { }

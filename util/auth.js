import axios from "axios";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response);
}

const API_KEY = "AIzaSyDjw0wxpQ1_CWKm01-nfYMKs1I-Gtvtgy0";
export async function createUser(email, password) {
  await authenticate("Signup", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}

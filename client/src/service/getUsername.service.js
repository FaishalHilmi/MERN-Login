import { jwtDecode } from "jwt-decode";

const getUsername = (token, callback) => {
  const decoded = jwtDecode(token);
  const username = decoded.username;

  callback(username);
};

export default getUsername;

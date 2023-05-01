const db = require("./db");
const jwt = require('jsonwebtoken');

async function getUser(username, password) {
  const response = await db.query(
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
  );

  if (response.length > 0) {
    const token = jwt.sign({ id: response.id }, process.env.JWT_SECRET);
    return { token, response };
  } else {
    return "Invalid Credentials";
  }
}

module.exports = { getUser };
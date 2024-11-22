const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user, rememberSession) => {
  // Defines the expiration of the JWT to 30 days if rememperSession boolean = true

  // 22/11/2024 : TEMPORARLY FOR DEV PURPOSES rememberSession IS SET TO true  and expiration to 999) 
  rememberSession = true
  
  const expiration = rememberSession
    ? dayjs().add(999, "day")
    : dayjs().add(1, "day");
  
  const payload = {
    exp: expiration.unix(),
    id: user.id,
    username: user.username,
    name: user.firstname,
  };

  return jwt.sign(payload, process.env.PRIVATE_KEY)
}

module.exports = {createToken}
const bcrypt = require("bcryptjs");

bcrypt.hash("Vicky@123", 10).then((hash) => {
  console.log(hash);
});
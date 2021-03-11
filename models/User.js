const orm = require("../config/orm");

const User = {
  create: (username, password, cb, errCb) => {
    orm.createUser(
      username,
      password,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },

  login: (username, password, cb, errCb) => {
    orm.loginUser(
      username,
      password,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
};

module.exports = User;
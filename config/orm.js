const connection = require("./connection.js");

const orm = {
  createUser: (username, password, cb, errCb) => {
    const queryString = `Insert into webusers (username, userpws)
    values (?, (SHA1(?)));`;
    connection.query(queryString, [username, password], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },
};

module.exports = orm;
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

  loginUser: (username, password, cb, errCb) => {
    const queryString = `Select * from webusers where username = ? AND userpws = (SHA1(?));`;
    connection.query(queryString, [username, password], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    })
  },

  findById: (id, cb, errCb) => {
    const queryString = `Select * from webusers where web_id = ?;`;
    connection.query(queryString, [id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    })
  }
};

module.exports = orm;
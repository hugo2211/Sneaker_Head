const connection = require("./connection.js");

const orm = {
  createUser: (username, password, email, first_name, last_name, cb, errCb) => {
    const queryString = `Insert into webusers (username, userpws, email, first_name, last_name)
    values (?, (SHA1(?)), ?, ?, ?);`;
    connection.query(queryString, [username, password, email, first_name, last_name], (err, result) => {
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
  },

  createPost: (brand_name, shoe_model, color, year, status_name, web_id, url, cb, errCb) => {
    const queryString = `Call add_shoe (?, ?, ?, ?, ?, ?, ?);`;
    connection.query(queryString, [brand_name, shoe_model, color, year, status_name, web_id, url], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    })
  },

  getAllPosts: (cb, errCb) => {
    const queryString = 'Call pull_shoes;'
    connection.query(queryString, (err, result) => {
      if (err) {
        return errCb(err)
      } else {
        return cb(result);
      }
    })
  },

  getUserShoes: (web_id, cb, errCb) => {
    const queryString = 'Call pull_user_shoes (?);';
    connection.query(queryString, [web_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    })
  }
};

/* image: fileUpload,
          shoeBrand,
          shoeModel,
          shoeColorArr,
          shoeYear,
          postAction, */

module.exports = orm;
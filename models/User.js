const orm = require("../config/orm");

const User = {
  create: (username, password, email, first_name, last_name, cb, errCb) => {
    orm.createUser(
      username,
      password,
      email,
      first_name,
      last_name,
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

  findById: (id, cb, errCb) => {
    orm.findById(
      id,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },

  createPost: (postInfoObj, cb, errCb) => {
    orm.createPost(
      postInfoObj,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },

  getSingleShoe: (shoe_id, cb, errCb) => {
    orm.getSingleShoe(
      shoe_id,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },

  getShoes: (web_id, cb, errCb) => {
    orm.getUserShoes(
      web_id,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },

  getFeed: (web_id, cb, errCb) => {
    orm.getFeedShoes(
      web_id,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
};

module.exports = User;

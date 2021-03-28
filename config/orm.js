const connection = require("./connection.js");

const orm = {
  createUser: (username, password, email, first_name, last_name, cb, errCb) => {
    const queryString = `Insert into webusers (username, userpws, email, first_name, last_name)
    values (?, (SHA1(?)), ?, ?, ?);`;
    connection.query(
      queryString,
      [username, password, email, first_name, last_name],
      (err, result) => {
        if (err) {
          return errCb(err);
        } else {
          return cb(result);
        }
      }
    );
  },

  addComment: (shoe_id, web_id, shoe_comment, cb, errCb) => {
    const queryString = `Call add_comments (?, ?, ?);`;
    connection.query(queryString, [shoe_id, web_id, shoe_comment], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });  
  },

  getComments: (shoe_id, cb, errCb) => {
    console.log('shoe_id', shoe_id)

    const queryString = `Call pull_shoe_comments (?);`;
    connection.query(queryString, [shoe_id], (err, result) => {
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
    });
  },

  findById: (id, cb, errCb) => {
    const queryString = `Select * from webusers where web_id = ?;`;
    connection.query(queryString, [id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  createPost: (postInfoObj, cb, errCb) => {
    console.log("postInfoObj", postInfoObj);
    let {
      brand_name,
      shoe_model,
      color,
      year,
      status_name,
      web_id,
      url,
      price,
      condition,
      description,
    } = postInfoObj;

    if (price === "") {
      price = 0;
    }

    const queryString = `Call add_shoe (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    connection.query(
      queryString,
      [
        brand_name,
        shoe_model,
        color,
        year,
        status_name,
        web_id,
        url,
        price,
        condition,
        description,
      ],
      (err, result) => {
        if (err) {
          return errCb(err);
        } else {
          return cb(result);
        }
      }
    );
  },

  getAllPosts: (cb, errCb) => {
    const queryString = "Call pull_shoes;";
    connection.query(queryString, (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  getSingleShoe: (shoe_id, cb, errCb) => {
    const queryString = `Call pull_shoe (?);`;
    connection.query(queryString, [shoe_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  getUserShoes: (web_id, cb, errCb) => {
    const queryString = "Call pull_user_shoes (?);";
    connection.query(queryString, [web_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  getFeedShoes: (web_id, cb, errCb) => {
    const queryString = `Call feed_shoes (?);`;
    connection.query(queryString, [web_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  deleteShoe: (shoe_id, cb, errCb) => {
    const queryString = `Call delete_shoe (?);`;
    connection.query(queryString, [shoe_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  updateShoe: (shoeInfoObj, cb, errCb) => {
    console.log("shoeInfoObj", shoeInfoObj);
    let {
      shoe_id,
      brand_name,
      shoe_model,
      color,
      year,
      status_name,
      price,
      condition,
      description,
    } = shoeInfoObj;

    console.log('orm level shoeInfoObj');
    console.log(shoeInfoObj);

    const queryString = `Call update_myshoes (?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    connection.query(
      queryString,
      [
        shoe_id,
        brand_name,
        shoe_model,
        color,
        year,
        status_name,
        price,
        condition,
        description,
      ],
      (err, result) => {
        if (err) {
          return errCb(err);
        } else {
          return cb(result);
        }
      }
    );
  },

  addLike: (web_id, shoe_id, cb, errCb) => {
    const queryString = `Call add_like (?, ?);`;
    connection.query(queryString, [web_id, shoe_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  removeLike: (web_id, shoe_id, cb, errCb) => {
    const queryString = `Call remove_like (?, ?);`;
    connection.query(queryString, [web_id, shoe_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },

  checkIfUserHasLiked: (web_id, shoe_id, cb, errCb) => {
    const queryString = `Call pull_user_shoe_like (?, ?);`;
    connection.query(queryString, [web_id, shoe_id], (err, result) => {
      if (err) {
        return errCb(err);
      } else {
        return cb(result);
      }
    });
  },
};

/* image: fileUpload,
          shoeBrand,
          shoeModel,
          shoeColorArr,
          shoeYear,
          postAction, */

module.exports = orm;

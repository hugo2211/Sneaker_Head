import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import CommentBox from "../general/CommentBox";

import DeleteModal from "../modals/DeleteModal";
import LikeButton from "../buttons/LikeButton";
const useStyles = makeStyles(() => ({
  shoePost: {
    maxWidth: 300,
  },
  usernameAndIcons: {
    display: "grid",
    gridTemplateColumns: "auto auto"
  },
  seperator: {
    backgroundColor: "white",
  },
  italic: {
    fontStyle: "italic",
  },
}));

const ProfilePage = ({ history }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [userShoeCollection, setUserShoeCollecton] = useState([]);

  const getShoes = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    const userId = localStorage.getItem("web_id");

    axios
      .get(`/api/private/shoes?userid=${userId}`, config)
      .then(function (response) {
        console.log("shoes form backedn!!", response.data.data[0]);
        setUserShoeCollecton(response.data.data[0]);
      });
  };

  useEffect(() => {
    //fetchUserData();
    getShoes();
  }, []);

  const handleEditClick = (shoe_id, history) => {
    history.push(`/post/edit/${shoe_id}`);
  };

  const handleDeleteClick = async (shoe_id) => {
    console.log("shoe deleted", shoe_id);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      await axios.delete(`/api/private/shoe?shoeid=${shoe_id}`, config);
      getShoes();
    } catch (error) {
      console.log(error);
      setError("There was an error deleteing the shoe.");
    }
  };

  return (
    <div>
      <div>
        <h2 className="centered-text mt-4">My Kicks</h2>
        {error && <span className="error-message">{error}</span>}
      </div>

      <div className="collection container">
        <div className="row">
          {userShoeCollection.map((shoe) => {
            return (
              <div
                className={`col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-4`}
                key={shoe.shoe_id}
              >
                <div className={classes.shoePost}>
                  <div className={classes.usernameAndIcons}>
                    <div className="username">
                    {shoe.username}
                    </div>
                    <div className="text-right">
                      <i
                        className="far fa-edit mr-4"
                        onClick={() => handleEditClick(shoe.shoe_id, history)}
                      ></i>
                      <DeleteModal
                        handleDeleteClick={() =>
                          handleDeleteClick(shoe.shoe_id)
                        }
                      />
                    </div>
                  </div>
                  <img
                    alt={`${shoe.brand_name} ${shoe.shoe_model} ${shoe.year}`}
                    style={{ height: "200px", width: "300px" }}
                    src={shoe.image_url}
                  />
                  <div>
                    <LikeButton
                      numLikes={shoe.likes}
                      shoeId={shoe.shoe_id}
                      webId={localStorage.getItem("web_id")}
                    />
                  </div>
                  <div className={classes.italic}>{shoe.description}</div>

                  <CommentBox
                    shoeId={shoe.shoe_id}
                    webId={localStorage.getItem("web_id")}
                    commentNumber={shoe.comments}
                  />

                  <hr className={classes.seperator} />
                  {shoe.status_name === "Trade" ||
                  shoe.status_name === "Sell" ? (
                    <div>Status: For {shoe.status_name}</div>
                  ) : null}
                  <div>Brand: {shoe.brand_name}</div>
                  <div>Model: {shoe.shoe_model}</div>
                  <div>Year: {shoe.year}</div>
                  {shoe.size && (
                    <div>Size: {shoe.size}</div>
                  )}
                  {shoe.shoe_condition && (
                    <div>Condition: {shoe.shoe_condition}</div>
                  )}
                  {shoe.price && <div>Price: ${shoe.price}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

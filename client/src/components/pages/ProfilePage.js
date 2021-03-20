import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeButton from "../inputs/Like";


const style = {
    card: {
        margin: "auto",
        color: "black",
        // width: "auto"
        // display: "flex",
        // position: "relative"
    },
    // img: {
  
    // },
    h5: {
        textAlign: "left"
    }
}


const ProfilePage = () => {

  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [userShoeCollection, setUserShoeCollecton] = useState([]);
  const fetchUserData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.get(`/api/private`, config);

      console.log(data);
      setUserInfo(data.data);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("authToken");
      setError("You are not authorized please login");
    }
  };
  const getShoes = () => {
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    axios.get('/api/private/shoes', config).then(function (response) {
      console.log('shoes form backedn!!', response)
      setUserShoeCollecton(response.data.data)

    })
  }

  useEffect(() => {
    fetchUserData();
    getShoes();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center">My Kicks</h2>
        {error && <span className="error-message">{error}</span>}
      </div>

      <div className="collection">  
  
            {userShoeCollection.map((shoe) => {
               return(<div className="card mb-5 shoe-card" key = {shoe.id}style={style.card} >
               <div className="img-container">
                <h5>{shoe.shoe}</h5> 
                 <img alt={shoe.shoe} src={shoe.image} style= {style.img} />
               </div>
               <div className="content">
                   <h5>Likes: {shoe.likes} </h5>
                   <div> <LikeButton/></div>
               </div>
             </div>)
  
             
            })}
  
  
          </div>
          
        </div>

  );
};

export default ProfilePage;

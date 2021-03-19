import React, { useState, useEffect } from "react";
import axios from "axios";


const style = {
    card: {
        margin: 50,
        color: "black"
    },
    img: {
        marginLeft: 200
    },
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
               return(<div className="card mb-5" style={style.card} >
               <div className="img-container">
                <h2>{shoe.comment}</h2> 
                 <img alt={shoe.shoe} src={shoe.image} style= {style.img} />
               </div>
               <div className="content">
                   <h5>Likes: {shoe.likes} </h5>
               </div>
             </div>)
  
             
            })}
  
  
          </div>
          
        </div>

  );
};

export default ProfilePage;

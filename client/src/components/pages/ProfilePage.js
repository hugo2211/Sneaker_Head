import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <h2 className="text-center">Profile Page</h2>
        {error && <span className="error-message">{error}</span>}
      </div>

      <div id="carouselExampleIndicators" className="carousel slide align-self-center" data-ride="carousel">
  
          <div className="carousel-inner">
  
            {userShoeCollection.map((shoe, i) => {
  
              var active = i === 0 ? 'carousel-item active' : 'carousel-item';
              return (<div className={active}>
                <img className="d-block w-50"
                  src={shoe.image}
                  style={{ height:'50px' }}
                  alt="Coding Quiz Screenshot"></img>
  
                <a href="https://glove1911.github.io/Code-Quiz-Assignment/">
                 
                </a>
  
                <a href="https://github.com/Glove1911/Code-Quiz-Assignment">
                  {/* <button type="button" className="btn btn-outline-primary"
                    style={styles.button40Style}>Github Repository</button> */}
                </a>
  
              </div>)
            })}
  
  
          </div>
          <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button"
            data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
            data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    </div>
  );
};

export default ProfilePage;

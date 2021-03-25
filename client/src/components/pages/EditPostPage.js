import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const EditPostPage = () => {
  let { id } = useParams();

  const getShoe = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.get(`/api/private/shoe?shoeid=${id}`, config);
      console.log(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShoe();
  }, []);

  return (
    <div>Edit Post Page</div>
  )
}

export default EditPostPage;
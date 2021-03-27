import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLike] = useState(0);
    const [update, setUpdated] = useState(false);

    const addLike = () => {
        if (!update) {
            setLike(likes + 1);
            setUpdated(true);
        } else {
            setLike(likes - 1);
            setUpdated(false);
        }
    }

    return (
        <div>
            <button className="Likes" onClick={addLike}>
                <i className="fas fa-heart" style={{ color: "Crimson" }}></i>
                {likes} Likes! </button>
        </div>
    )
}

export default LikeButton;
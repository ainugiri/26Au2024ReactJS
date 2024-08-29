import React, { useState } from 'react';

function Likes(){

    const [likes, setLikes] = useState(0);

    const onIncrement = () => {
        setLikes(likes + 1);
    }   


    return (
        <div>
            <h2>Like Button</h2>
            <button onClick={onIncrement}>👍</button> <span>{likes}</span>
        </div>
    );
}

export default Likes;   // Export the component for use in other files
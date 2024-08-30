import React, {useContext} from 'react';
import uConstext from './UserContext';

function DisplayUser() {
    const uname = useContext(uConstext);
    return (
        <div>
            <h2>User: {uname}</h2>
        </div>
    );
}


export default DisplayUser;   // Export the component for use in other files
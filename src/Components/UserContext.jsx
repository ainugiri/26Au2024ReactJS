import React, {createContext, useState} from "react";

const uConstext = createContext();

export function UserProvider({children}) {
    const [uname, setUname] = useState('John Doe');
    const handleClick = () => {
        setUname('');
    }

    return (
        <>
        <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
        <button onClick={handleClick}>Clear</button>

        <uConstext.Provider value={uname}>
            {children}
        </uConstext.Provider>
        </>
    );
}

export default uConstext;
import React, {useState, useEffect } from 'react';

function ListUsers() {
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setUsers(data); // update state with fetched data
            } catch (error) {
                setError(error);
            }
            finally {
                setLoad(false);
            }
        };
        fetchUsers();
    }, []); // empty array to run only once
    if(load) return 'Loading...';
    if(error) return `Error: ${error.message}`;
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default ListUsers;
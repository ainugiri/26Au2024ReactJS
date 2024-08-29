import React, { useState } from 'react';

const Remainders = () => {
    const [remainder, setRemainder] = useState('');
    const [remaindersList, setRemaindersList] = useState([]);

    const handleInputChange = (e) => {
        setRemainder(e.target.value);
    };

    const handleAddRemainder = () => {
        if (remainder.trim() !== '') {
            setRemaindersList([...remaindersList, remainder]);
            setRemainder('');
        }
    };

    const handleDeleteRemainder = (index) => {
        const updatedRemaindersList = remaindersList.filter((_, i) => i !== index);
        setRemaindersList(updatedRemaindersList);
    };

    return (
        <div>
            <input
                type="text"
                value={remainder}
                onChange={handleInputChange}
                placeholder="Enter a remainder"
            />
            <button onClick={handleAddRemainder}>Add</button>
            <ul>
                {remaindersList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDeleteRemainder(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Remainders;
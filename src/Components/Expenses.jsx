import React, { useState } from 'react';
import './Expenses.css';


const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const addItem = () => {
        const newItem = {
            itemName,
            price,
            quantity,
            totalAmount: price * quantity,
        };

        setExpenses([...expenses, newItem]);
        setItemName('');
        setPrice('');
        setQuantity('');
    };

    const deleteItem = (index) => {
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(index, 1);
        setExpenses(updatedExpenses);
    };

    const updateQuantity = (index, newQuantity) => {
        const updatedExpenses = [...expenses];
        updatedExpenses[index].quantity = newQuantity;
        updatedExpenses[index].totalAmount = updatedExpenses[index].price * newQuantity;
        setExpenses(updatedExpenses);
    };

    const updatePrice = (index, newPrice) => {
        const updatedExpenses = [...expenses];
        updatedExpenses[index].price = newPrice;
        updatedExpenses[index].totalAmount = newPrice * updatedExpenses[index].quantity;
        setExpenses(updatedExpenses);
    };

    return (
        <div className='Expenses'>
            <h2>Add Daily Expenses</h2>
            <div>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={addItem}>Add Item</button>
            </div>
            <div className='Expenses-list'>
                {expenses.map((expense, index) => (
                    <div key={index}>
                        <span>{expense.itemName}</span>
                        <input
                            type="number"
                            value={expense.price}
                            onChange={(e) => updatePrice(index, e.target.value)}
                        />
                        <input
                            type="number"
                            value={expense.quantity}
                            onChange={(e) => updateQuantity(index, e.target.value)}
                        />
                        <span>{expense.totalAmount}</span>
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Expenses;
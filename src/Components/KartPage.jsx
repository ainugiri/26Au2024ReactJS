import React, { useEffect, useState, createContext } from 'react';
import './KartPage.css';
const KartPage = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        document.title = `Kart (${items.length})`;
    }, [items]);

    const addItem = () => {
        const newItem = {
            itemName,
            qty,
            price
        };
        setItems([...items, newItem]);
        setItemName('');
        setQty(0);
        setPrice(0);
    };

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const modifyItem = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };

    const calculateTotal = () => {
        let total = 0;
        items.forEach((item) => {
            total += item.qty * item.price;
        });
        return total;
    };

    return (
        <div className="kart-page">
            <h1>Kart Page</h1>
            <div className="add-item">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={qty}
                    onChange={(e) => setQty(parseInt(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
                <button onClick={addItem}>Add Item</button>
            </div>
            <div className="item-list">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <span>{item.itemName}    </span>
                        <span>{item.qty}    </span>
                        <span>{item.price}    </span>
                        <button onClick={() => deleteItem(index)}>Delete</button>
                        <button onClick={() => modifyItem(index, 'qty', parseInt(prompt('Enter new quantity:')))}>Modify Qty</button>
                        <button onClick={() => modifyItem(index, 'price', parseFloat(prompt('Enter new price:')))}>Modify Price</button>
                    </div>
                ))}
            </div>
            <div className="total">
                <span>Total: {calculateTotal()}</span>
            </div>
        </div>

    );
};

export default KartPage;
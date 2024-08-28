import React, {Component} from 'react'; 

class Products extends Component {
    products = [
        {name: 'Laptop', price: 1000, description: 'Apple Macbook Pro'},
        {name: 'Mobile', price: 500, description: 'Apple iPhone 12'},
        {name: 'Tablet', price: 300, description: 'Apple iPad Pro'},
        {name: 'Watch', price: 200, description: 'Apple Watch Series 6'}
    ];
    render() {
        return (
        <div>
            <ul>
                {
                this.products.map((product) => (
                    <li> {product.name} - {product.price} - {product.description}</li>
                ))}
            </ul>
        </div>
        );
    }
}

export default Products;
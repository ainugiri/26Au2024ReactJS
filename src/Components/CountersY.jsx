import React, { Component } from 'react';    
// state manage
// Class Component

class CountersY extends Component {
    constructor(props) {
        super(props);
        this.state = { likes : 0 };
    }
    onClickIncrement = () => {
        this.setState({ likes: this.state.likes + 1 });
    }   

    render() {
        return (
            <div>
                <h2>Like Button</h2>
                <button onClick={this.onClickIncrement}>👍</button> <span>{this.state.likes}</span>
            </div>
        );
    }
}
export default CountersY;   // Export the component for use in other files  
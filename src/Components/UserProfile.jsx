import React, {Component} from 'react';

class UserProfile extends Component {
    render(){     
        return(
            <>
                <p>Name of the candidate {this.props.name} and age is : {this.props.age}, from {this.props.city}, working as a {this.props.occupation} </p>
            </>
        )
    }
}

UserProfile.defaultProps = {
    name: 'Unknown',
    age: 'N/A',
    city: 'N/A',
    occupation: 'N/A'
}   

export default UserProfile;
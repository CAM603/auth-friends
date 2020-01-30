import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addFriends } from '../actions/addFriendsAction';

const AddFriend = (props) => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
        picture: ''
    })

    const handleChanges = (event) => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        props.addFriends(friend)
        setFriend({
            name: '',
            age: '',
            email: '',
            picture: ''
        })
    }
    
    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={friend.name}
                placeholder="name"
                onChange={handleChanges}
                name="name"
                />
                <input
                type="text"
                value={friend.age}
                placeholder="age"
                onChange={handleChanges}
                name="age"
                />
                <input
                type="text"
                value={friend.email}
                placeholder="email"
                onChange={handleChanges}
                name="email"
                />
                <input
                type="text"
                value={friend.picture}
                placeholder="picture"
                onChange={handleChanges}
                name="picture"
                />
                <button>Add</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, {addFriends})(AddFriend);
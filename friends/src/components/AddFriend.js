import React, { useState, useContext } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'
import { FriendsContext } from '../contexts/FriendsContext';

const AddFriend = (props) => {
    const { value2 } = useContext(FriendsContext);
    const [friends, setFriends] = value2;
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
        axiosWithAuth()
        .post('friends', friend)
        .then(res => {
            setFriends(res.data)
            setFriend({
                name: '',
                age: '',
                email: '',
                picture: ''
            })
        })
        .catch(err => console.log(err))
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

export default AddFriend;
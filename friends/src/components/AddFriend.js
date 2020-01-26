import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = (props) => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
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
            props.setFriends(res.data)
            setFriend({
                name: '',
                age: '',
                email: ''
            })
        })
        .catch(err => console.log(err))
    }
    
    console.log(friend)
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
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddFriend;
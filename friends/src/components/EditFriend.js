import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const EditFriend = (props) => {
    const [friend, setFriend] = useState({
        name: props.friend.name,
        age: props.friend.age,
        email: props.friend.email
    })
    console.log(props.friend)

    const handleChanges = (event) => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
        .put(`friends/${props.friend.id}`, friend)
        .then(res => {
            props.setEditing(false)
            props.setFriends(res.data)
            setFriend({
                name: '',
                age: '',
                email: ''
            })
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h1>Edit Friend</h1>
            <form onSubmit={handleSubmit}>
                <input
                placeholder={props.friend.name}
                onChange={handleChanges}
                value={friend.name}
                name="name"
                />
                <input
                placeholder={props.friend.age}
                onChange={handleChanges}
                value={friend.age}
                name="age"
                />
                <input
                placeholder={props.friend.email}
                onChange={handleChanges}
                value={friend.email}
                name="email"
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditFriend;
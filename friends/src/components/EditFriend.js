import React, { useState, useContext } from 'react';
import { FriendsContext } from '../contexts/FriendsContext';

const EditFriend = (props) => {
    const { value5, value8 } = useContext(FriendsContext)
    
    const currentFriend = value8;
    const updatedFriend = value5;
    const [friend, setFriend] = useState(currentFriend)

    const handleChanges = (event) => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <div>
            <h1>Edit Friend</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                updatedFriend(friend.id, friend)
            }}>
                <input
                placeholder={friend.name}
                onChange={handleChanges}
                value={friend.name}
                name="name"
                />
                <input
                placeholder={friend.age}
                onChange={handleChanges}
                value={friend.age}
                name="age"
                />
                <input
                placeholder={friend.email}
                onChange={handleChanges}
                value={friend.email}
                name="email"
                />
                <input
                placeholder={friend.picture}
                onChange={handleChanges}
                value={friend.picture}
                name="picture"
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditFriend;
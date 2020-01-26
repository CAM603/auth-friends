import React, { useState } from 'react';

const EditFriend = (props) => {
    const [friend, setFriend] = useState(props.currentFriend)
    

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
                props.updatedFriend(friend.id, friend)
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
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditFriend;
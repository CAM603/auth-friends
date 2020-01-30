import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateFriend } from '../actions/editFriendsAction'

const EditFriend = (props) => {
    const [friend, setFriend] = useState(props.friend)
    

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
                props.updateFriend(friend)
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
const mapStateToProps = state => {
    return {
        friend: state.friendsReducer.currentFriend
    }
}
export default connect(mapStateToProps, {updateFriend})(EditFriend);
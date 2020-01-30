import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';
import { connect } from 'react-redux';

import { fetchFriends } from '../actions/fetchFriendsAction';
import { deleteFriends } from '../actions/deleteFriendsAction';
import { setFriendToEdit } from '../actions/editFriendsAction';

const FriendsList = (props) => {
    
    
    // const initialState = {id: null, name: '', age: '', email: '', picture: ''}
    // const [currentFriend, setCurrentFriend] = useState(initialState)
    
    
    useEffect(() => {
        props.fetchFriends()
    },[])

    const deleteFriends = (id) => {
        props.deleteFriends(id)
    }
    
    const editFriend = friend => {
        // setCurrentFriend({id: friend.id, name: friend.name, age: friend.age, email: friend.email, picture: friend.picture})
        props.setFriendToEdit(friend)
    }

    return (
        <div>
            <h1>Gang's all here</h1>
            {props.loading ? <h1>Loading...</h1> : props.friends.map(friend => (
                <div key={friend.id}>
                    <Link to={`friendsList/${friend.id}`}>
                        <p>{friend.name}</p>
                    </Link>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <p>{friend.picture}</p>
                    <button onClick={() => deleteFriends(friend.id)}>Delete</button>
                    <button onClick={() => editFriend(friend)}>Edit</button>
                </div>
            ))}
            {props.editing 
            ? 
            <EditFriend/>
            : 
            <AddFriend/>}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        loading: state.friendsReducer.loading,
        editing: state.friendsReducer.editing,
        deleting: state.friendsReducer.deleting,
        currentFriend: state.friendsReducer.currentFriend
    }
}
export default connect(mapStateToProps, {fetchFriends, deleteFriends, setFriendToEdit})(FriendsList);
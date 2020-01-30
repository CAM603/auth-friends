import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';
import { connect } from 'react-redux';

import { fetchFriends } from '../actions/fetchFriendsAction';
import { deleteFriends } from '../actions/deleteFriendsAction';

const FriendsList = (props) => {
    
    
    const initialState = {id: null, name: '', age: '', email: '', picture: ''}
    const [currentFriend, setCurrentFriend] = useState(initialState)
    
    
    useEffect(() => {
        props.fetchFriends()
    },[])

    const deleteFriends = (id) => {
        props.deleteFriends(id)
    }
    // const updatedFriend = (id, updatedFriend) => {
    //     setEditing(false)
    //     axiosWithAuth()
    //     .put(`friends/${id}`, updatedFriend)
    //     .then(res => {
    //         setFriends(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }
    // const editFriend = friend => {
    //     setEditing(true);
    //     setCurrentFriend({id: friend.id, name: friend.name, age: friend.age, email: friend.email, picture: friend.picture})
    // }

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
                    {/* <button onClick={() => editFriend(friend)}>Edit</button> */}
                </div>
            ))}
            {props.editing 
            ? 
            <EditFriend 
            editing={props.editing}
            // setEditing={setEditing}
            // currentFriend={currentFriend}
            // updatedFriend={updatedFriend}
            />
            : 
            <AddFriend 
            // setFriends={setFriends}
            />}
            
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        loading: state.friendsReducer.loading,
        editing: state.friendsReducer.editing,
        deleting: state.friendsReducer.deleting
    }
}
export default connect(mapStateToProps, {fetchFriends, deleteFriends})(FriendsList);
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const initialState = {id: null, name: '', age: '', email: '', picture: ''}
    const [currentFriend, setCurrentFriend] = useState(initialState)
    
    
    useEffect(() => {
        getFriends()
    },[])

    const getFriends = () => {
        setLoading(true)
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    const deleteFriend = (id) => {
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }

    const updatedFriend = (id, updatedFriend) => {
        setEditing(false)
        axiosWithAuth()
        .put(`friends/${id}`, updatedFriend)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }
    const editFriend = friend => {
        setEditing(true);
        setCurrentFriend({id: friend.id, name: friend.name, age: friend.age, email: friend.email, picture: friend.picture})
    }

    return (
        <div>
            <h1>Gang's all here</h1>
            {loading ? <h1>Loading...</h1> : friends.map(friend => (
                <div key={friend.id}>
                    <Link to={`friendsList/${friend.id}`}>
                        <p>{friend.name}</p>
                    </Link>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <p>{friend.picture}</p>
                    <button onClick={() => deleteFriend(friend.id)}>Delete</button>
                    <button onClick={() => editFriend(friend)}>Edit</button>
                </div>
            ))}
            {editing 
            ? 
            <EditFriend 
            editing={editing}
            setEditing={setEditing}
            currentFriend={currentFriend}
            updatedFriend={updatedFriend}
            />
            : 
            <AddFriend setFriends={setFriends}/>}
            
            
        </div>
    )
}

export default FriendsList;
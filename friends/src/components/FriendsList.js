import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editFriend, setEditFriend] = useState({})
    
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

    const updateFriend = (friend) => {
        setEditing(true)
        setEditFriend(friend)
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
                    <button onClick={() => deleteFriend(friend.id)}>Delete</button>
                    <button onClick={() => updateFriend(friend)}>Edit</button>
                </div>
            ))}
            {editing ? <EditFriend 
            setFriends={setFriends} 
            friend={editFriend}
            setEditing={setEditing}
            />
            : <AddFriend setFriends={setFriends}/>}
            
            
        </div>
    )
}

export default FriendsList;
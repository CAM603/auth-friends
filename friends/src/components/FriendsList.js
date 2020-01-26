import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false)

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

    return (
        <div>
            <h1>Gang's all here</h1>
            {loading ? <h1>Loading...</h1> : friends.map(friend => (
                <div>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <button onClick={() => deleteFriend(friend.id)}>Delete</button>
                </div>
            ))}
            <AddFriend setFriends={setFriends}/>
        </div>
    )
}

export default FriendsList;
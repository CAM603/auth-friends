import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getFriends()
    },[])

    const getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Gang's all here</h1>
            {friends.map(friend => (
                <div>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
            <div>
                <p>Cameron</p>
                <span>🧑🏻‍🦰</span>
            </div>
            <div>
                <p>Kim</p>
                <span>👩🏻‍🦰</span>
            </div>
            <div>
                <p>Kaylyn</p>
                <span>👧🏻</span>
            </div>
            <div>
                <p>Bob</p>
                <span>🧔🏼</span>
            </div>
            <div>
                <p>Sally</p>
                <span>👱🏽‍♀️</span>
            </div>
            <div>
                <p>Mike</p>
                <span>👨🏿‍🦱</span>
            </div>
        </div>
    )
}

export default FriendsList;
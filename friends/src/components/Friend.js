import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = (props) => {
    const [friend, setFriend] = useState({})
    
    useEffect(() => {
        getFriend(props.match.params.id)
    },[props.match.params.id])

    const getFriend = (id) => {
        axiosWithAuth()
        .get(`friends/${id}`)
        .then(res => {
            setFriend(res.data)
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default Friend;
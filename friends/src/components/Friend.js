import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

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
        <div className="friend">
            <Toast>
                <ToastBody>
                    <ToastHeader icon="success">{friend.name}</ToastHeader>
                    <ToastBody>
                    <p style={{fontSize: '3rem'}}>{friend.picture}</p>
                    <h2>Age: {friend.age}</h2>
                    <h5>Contact: {friend.email}</h5>
                    </ToastBody>
                </ToastBody>
            </Toast>
        </div>
    )
}

export default Friend;
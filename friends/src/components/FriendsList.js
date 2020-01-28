import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';
import { FriendsContext } from '../contexts/FriendsContext';

const FriendsList = (props) => {
    const { value, value2, value3, value4, value6, value7 } = useContext(FriendsContext);
    const getFriends = value;
    const [friends, setFriends] = value2;
    const loading = value3;
    const deleteFriend = value4;
    const [editing] = value6;
    const editFriend = value7;
    

    useEffect(() => {
        getFriends()
    },[])

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
                <EditFriend/>
                : 
                <AddFriend/>}
            </div>
    )
}

export default FriendsList;
import React, { useState, createContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const FriendsContext = createContext();

export const FriendsProvider = (props) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const initialState = {id: null, name: '', age: '', email: '', picture: ''}
    const [currentFriend, setCurrentFriend] = useState(initialState)

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
        <FriendsContext.Provider value={{
            value: getFriends,
            value2: [friends, setFriends],
            value3: loading,
            value4: deleteFriend,
            value5: updatedFriend,
            value6: [editing, setEditing],
            value7: editFriend,
            value8: currentFriend
            }}>
            {props.children}
        </FriendsContext.Provider>
    )
}
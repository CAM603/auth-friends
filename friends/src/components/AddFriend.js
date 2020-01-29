import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = (props) => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
        picture: ''
    })

    const handleChanges = (event) => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
        .post('friends', friend)
        .then(res => {
            props.setFriends(res.data)
            setFriend({
                name: '',
                age: '',
                email: '',
                picture: ''
            })
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="form">
            <h1>Add Friend</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                    type="text"
                    value={friend.name}
                    placeholder="name"
                    onChange={handleChanges}
                    name="name"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    type="text"
                    value={friend.age}
                    placeholder="age"
                    onChange={handleChanges}
                    name="age"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    type="text"
                    value={friend.email}
                    placeholder="email"
                    onChange={handleChanges}
                    name="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    type="text"
                    value={friend.picture}
                    placeholder="picture"
                    onChange={handleChanges}
                    name="picture"
                    />
                </FormGroup>
                <Button color="success">Add</Button>
            </Form>
        </div>
    )
}

export default AddFriend;
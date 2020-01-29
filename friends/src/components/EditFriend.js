import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditFriend = (props) => {
    const [friend, setFriend] = useState(props.currentFriend)
    

    const handleChanges = (event) => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <div className="form">
            <h1>{friend.name}</h1>
            <Form onSubmit={(event) => {
                event.preventDefault()
                props.updatedFriend(friend.id, friend)
            }}>
                <FormGroup>
                    <Input
                    placeholder={friend.name}
                    onChange={handleChanges}
                    value={friend.name}
                    name="name"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    placeholder={friend.age}
                    onChange={handleChanges}
                    value={friend.age}
                    name="age"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    placeholder={friend.email}
                    onChange={handleChanges}
                    value={friend.email}
                    name="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    placeholder={friend.picture}
                    onChange={handleChanges}
                    value={friend.picture}
                    name="picture"
                    />
                </FormGroup>
                <Button color="primary">Update</Button>
            </Form>
        </div>
    )
}

export default EditFriend;
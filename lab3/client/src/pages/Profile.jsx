import React, {useContext} from 'react';
import {Card, Container, ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Profile = observer(() => {

    let {user} = useContext(Context).user;


    return (
        <Container  className="d-flex justify-content-center align-items-center"
                    style={{height: window.innerHeight - 40}}>

            <Card style={{ width: '18rem' }}>
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin"
                     className="rounded-circle p-1 rounded mx-auto d-block" width="110"/>


                <ListGroup variant="flush">

                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                    <ListGroup.Item>First Name: {user.firstName}</ListGroup.Item>
                    <ListGroup.Item>Last Name: {user.lastName}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
});

export default Profile;
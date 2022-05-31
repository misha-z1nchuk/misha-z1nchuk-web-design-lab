import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {createPost, deletePost, getPosts} from "../http/postApi";
import {CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle} from "@coreui/react";

const Main = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [posts, setPosts] = useState([])

    useEffect( () => {
        getPosts().then(res => {
            setPosts(res.data.data)
        })
    }, [])

    let deletePosts = async (id) => {
        let isOk = await deletePost(id);
        if (isOk){
            setPosts(posts.filter(post => post.id !== id));
        }
    }

    let click = async () => {
        await createPost(title, body);
        setTitle('')
        setBody('')
        getPosts().then(res => {
            setPosts(res.data.data)
        })
    }

    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center mt-3"
            >
                <Card style={{width: 800}} className="p-5">
                    <Form>
                        <h1 className="text-center">Add Post</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter a title..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" value={body} onChange={e => setBody(e.target.value)} rows={3} placeholder="Enter a body..." />
                        </Form.Group>
                        <Button className="w-100" variant="outline-secondary" onClick={() => { click()}}>Create</Button>
                    </Form>
                </Card>
            </Container>

            {posts.length ?
                posts.map(post =>
                    <Container className="d-flex justify-content-center align-items-center mt-3">
                        <CCard  style={{width: 800}} className="  mt-2">

                            <CCardHeader>{`(${post.createdAt.slice(0, 10)}) Author: ${post.user.firstName} ${post.user.lastName}`}</CCardHeader>


                            <CCardBody>

                                <CCardTitle>{post.title}</CCardTitle>

                                <CCardText>{post.body}</CCardText>

                                <div className="d-flex">
                                    <CButton onClick={() => {}}>Read More</CButton>
                                    <CButton className="ms-auto" variant="outline" color="danger" onClick={() => {deletePosts(post.id)}}>Delete</CButton>
                                </div>

                            </CCardBody>

                        </CCard>
                    </Container>

                )

                :
                <div></div>

            }

        </div>

    );
};

export default Main;
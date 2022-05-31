import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ABOUT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate, NavLink} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink style={{color:'black'}} end to="/">Blog</NavLink>
                {user.isAuth ?

                    <Nav className="ms-auto">
                        <Button className="ms-4" variant="outline-secondary me-2" onClick={() => navigate(ABOUT_ROUTE)}>About</Button>

                        <Button
                            className="me-2"
                            variant={"outline-secondary"}
                            onClick={() => navigate(PROFILE_ROUTE)}
                        >
                            Profile
                        </Button>
                        <Button  variant="outline-secondary" onClick={() => {user.logout()}}>Log out</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button className="ms-4" variant="outline-secondary" onClick={() => navigate(ABOUT_ROUTE)}>About</Button>
                        <Button className="ms-4" variant="outline-secondary" onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }
            </Container>

        </Navbar>
    );
});

export default NavBar;
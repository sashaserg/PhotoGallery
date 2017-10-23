
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Col, Grid, Row, NavItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



class HeaderBar extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return  (
            <Grid fluid = {true}>

                <Row>
                    <Navbar collapseOnSelect>

                        <Col lg={12} >

                            <Navbar.Header>

                                <Navbar.Brand>
                                    PSaP
                                </Navbar.Brand>
                                <Navbar.Toggle/>

                            </Navbar.Header>

                            <Navbar.Collapse>

                                <Nav>

                                    <LinkContainer  to={'/home'}>
                                        <NavItem>
                                            <span>Главная</span>
                                        </NavItem>
                                    </LinkContainer>

                                    <LinkContainer  to={"/best"}>
                                        <NavItem>
                                            <span>Лучшие</span>
                                        </NavItem>
                                    </LinkContainer>


                                        <NavItem>
                                            <span>Добавить фото</span>
                                        </NavItem>


                                </Nav>




                                <Nav pullRight>

                                    <LinkContainer  to={'/user/1'}>
                                        <NavItem>
                                            <span>Никнейм профиля</span>
                                        </NavItem>
                                    </LinkContainer>

                                    <LinkContainer  to={'/login'}>
                                        <NavItem>
                                            <span>Выйти зайти</span>
                                        </NavItem>
                                    </LinkContainer>

                                </Nav>
                            </Navbar.Collapse>

                        </Col>

                    </Navbar>

                </Row>

            </Grid>
        )
    }
}

export default HeaderBar;
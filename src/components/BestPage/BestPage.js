
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Col, Grid, Row, NavItem } from 'react-bootstrap'

import PostElement from '../PostElement/PostElement'

class BestPage extends Component
{
    render()
    {
        return  (
            <Grid fluid={true}>

                <Row>

                    <Col lg={5}  md={5} sm={7} id={'center'}>

                        <h2>The best photos</h2>

                        <div id={'PhotosList'}>



                            {/*<h1>This is indexpage</h1>

                            <Link to={"/user/1"}>

                            <span>
                            link to profile
                            </span>

                            </Link>*/}

                            <PostElement/>

                            <PostElement/>

                            <PostElement/>

                        </div>

                    </Col>

                </Row>




            </Grid>




        )
    }
}

export default BestPage;
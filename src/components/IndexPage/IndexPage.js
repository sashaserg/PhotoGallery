
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Col, Grid, Row, NavItem } from 'react-bootstrap'

import PostElement from '../PostElement/PostElement'

class IndexPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            last:[]
        }
    }



    componentWillMount(){
        this.fetchLast(15);
    }


    fetchLast(count = 15)
    {
        const self = this; // this может меняться
        const action = "/api/last/" + count; // куда посылаем

        fetch(action,
            {
                headers:
                    {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                    },

                credentials: 'same-origin',
                method:"GET"
            })
            .then(
                (response) =>
                {
                    if (response.status !== 200)
                    {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then((data) =>
                    {
                        self.setState({last:data});
                        console.log(data);

                    });
                }
            )
            .catch(function(err)
            {
                console.log('Fetch Error :-S', err);
            });
    }


    render()
    {
        const last = this.state.last.map((lastItem) => {return(<PostElement key={lastItem.id}
           userId={lastItem.user_id} user_avatar={lastItem.avatar_url} user_nickname={lastItem.nickname}
                 post_rating={lastItem.rating} post_pic={lastItem.pic_url} />);});
        return  (
            <Grid fluid={true}>

                <Row>

                    <Col lg={5}  md={5} sm={7} id={'center'}>

                        <h2>The newest photos</h2>

                        <div id={'PhotosList'}>

                            {
                                last
                            }

                        </div>

                    </Col>

                </Row>

            </Grid>




        )
    }






}
export default IndexPage;








/*<h1>This is indexpage</h1>

                            <Link to={"/user/1"}>

                            <span>
                            link to profile
                            </span>

                            </Link>*/
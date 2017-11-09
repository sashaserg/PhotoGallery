
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Col, Grid, Row, NavItem } from 'react-bootstrap'

import PostElement from '../PostElement/PostElement'

class BestPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            best:[]
        }
    }



    componentWillMount(){
        this.fetchBest(15);
    }


    fetchBest(count = 15)
    {
        const self = this; // this может меняться
        const action = "/api/best/" + count; // куда посылаем

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
                        self.setState({best:data});
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

        const best = this.state.best.map((bestItem) => {return(<PostElement key={bestItem.id}
              userId={bestItem.user_id} user_avatar={bestItem.avatar_url} user_nickname={bestItem.nickname}
                     post_rating={bestItem.rating} post_pic={bestItem.pic_url} />);});

        return  (
            <Grid fluid={true}>

                <Row>

                    <Col lg={5}  md={5} sm={7} id={'center'}>

                        <h2>The best photos</h2>

                        <div id={'PhotosList'}>

                            {
                                best
                            }

                        </div>

                    </Col>

                </Row>




            </Grid>




        )
    }
}

export default BestPage;
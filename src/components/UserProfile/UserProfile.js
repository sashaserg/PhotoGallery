import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Col, Row, Image} from 'react-bootstrap'


class UserProfile extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            userId: this.props.match.params.id,
            userInfo: {},
            userPhotos: []
        };
    }

    componentWillMount()
    {
        this.fetchUser();
        this.fetchUserPhotos();

    }

    fetchUserPhotos()
    {
        const self = this;
        const action = "/api/user/" + this.state.userId + "/photos";

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

                    response.json().then( ( data ) =>
                    {
                        self.setState( { userPhotos:data } );
                        console.log( data );

                    });
                }
            )
            .catch(function(err)
            {
                console.log('Fetch Error :-S', err);
            });

    }

    fetchUser()
    {
        console.log("fetchUser" + " " + this.state.userId);
        const self = this;
        const action = "/api/user/" + this.state.userId;

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
                        self.setState({userInfo:data});
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
        const photos = this.state.userPhotos.map( ( photo ) =>
        {
           return( <Col lg={4} md={4} sm={4}>

               <Image  src={ photo.pic_url }/>

           </Col> );
        });

        return  (

            <Grid>

                <Row id={"UPHeader"}>

                    <Col lg={8} md={8} sm={8} lgOffset={2} mdOffset={2} smOffset={2} >

                        <Row>

                            <Col lg={4} md={4} sm={4} id={"UPHUserPhoto"}>

                                <Image src={ this.state.userInfo.avatar_url } circle/>

                            </Col>

                            <Col lg={8} md={8} sm={8} id={"UPHUserInfo"}>

                                <Row>

                                    <Col lg={6} md={6} sm={6}>

                                        {
                                            this.state.userInfo.nickname
                                        }

                                    </Col>

                                    <Col lg={6} md={6} sm={6}>

                                        {/*<a>Редактировать профиль</a>*/}

                                    </Col>

                                </Row>

                                <Row>

                                    <Col lg={10} md={10} sm={10}>

                                        {
                                            this.state.userInfo.name
                                        }

                                    </Col>



                                </Row>

                            </Col>


                        </Row>

                    </Col>

                </Row>

                <Row id={"UPBody"}>

                    <Col lg={8} md={8} sm={8} lgOffset={2} mdOffset={2} smOffset={2}>

                        <hr/>

                        <Row id={"UPBPhotos"}>

                            {
                                photos
                            }

                        </Row>

                        <hr/>

                    </Col>


                </Row>
        </Grid>
    )
    }
}
export default UserProfile;

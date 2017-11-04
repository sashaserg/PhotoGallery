
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Col, Row, Image} from 'react-bootstrap'


class UserProfile extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            user: {
                id: this.props.match.params.id,
                name: null
            },
            roles: []
        };
       // this.fetchUser = this.fetchUser.bind(this); - bind
    }

    handleClick(e){
        alert(1);
    }


    componentDidMount() {
        this.fetchUser();
        this.fetchRoles();
    }

    /*componentWillMount() {
        alert(1);
    }

    componentWillUpdate() {

    }*/

    /*componentDidUpdate() { //

    }*/

    /*componentWillUnmount() { // когда он будет закрываться
        alert(3);
    }*/

    /*componentWillReceiveProps(nextProps, nextState) { // когда компонент получит пропертис
        alert(4);
    }*/

    /*shouldComponentUpdate(nextProps, nextState){ // можно сделать условие проверки нектпропс и некстстейт и не перерисовывать
        alert(JSON.stringify(nextProps));
        alert(JSON.stringify(nextState));
        return true;
    }*/
    fetchUser()
    {
        const self = this; // this может меняться
        const action = "/api/user/" + this.state.user.id; // куда посылаем

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
                        self.setState({user:data});

                    });
                }
            )
            .catch(function(err)
            {
                console.log('Fetch Error :-S', err);
            });
    }

    fetchRoles()
    {
        const self = this;
        const action = "/api/role";

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
                function(response)
                {
                    if (response.status !== 200)
                    {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then((data) =>
                    {
                        self.setState({roles:data});
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
        const roles = this.state.roles.map((role) => {return(<option key={role.id} value={role.id}>{role.name}</option>);});
        return  (

            <Grid>

                <Row id={"UPHeader"}>

                    <Col lg={8} md={8} sm={8} lgOffset={2} mdOffset={2} smOffset={2} >

                        <Row>

                            <Col lg={4} md={4} sm={4} id={"UPHUserPhoto"}>

                                <Image src={"http://www.razlib.ru/psihologija/upravlenie_sostojaniem/square.jpg"} circle/>

                            </Col>

                            <Col lg={8} md={8} sm={8} id={"UPHUserInfo"}>

                                <Row>

                                    <Col lg={6} md={6} sm={6}>

                                        Никнейм пользователя

                                    </Col>

                                    <Col lg={6} md={6} sm={6}>

                                        <a>Редактировать профиль</a>

                                    </Col>

                                </Row>

                                <Row>

                                    <Col lg={10} md={10} sm={10}>

                                        Подпись пользователя

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

                            <Col lg={4} md={4} sm={4}>

                                <Image src={"https://i0.wp.com/htmlforum.io/uploads/monthly_2017_09/B.png.1ad3c7961e2d3c57d706380631c08c16.png?ssl=1"}/>


                            </Col>

                            <Col lg={4} md={4} sm={4}>

                                <Image src={"https://i0.wp.com/htmlforum.io/uploads/monthly_2017_09/B.png.1ad3c7961e2d3c57d706380631c08c16.png?ssl=1"}/>


                            </Col>

                            <Col lg={4} md={4} sm={4}>

                                <Image src={"https://i0.wp.com/htmlforum.io/uploads/monthly_2017_09/B.png.1ad3c7961e2d3c57d706380631c08c16.png?ssl=1"}/>


                            </Col>



                        </Row>

                        <hr/>

                    </Col>


                </Row>
        </Grid>
    )
    }
}
export default UserProfile;

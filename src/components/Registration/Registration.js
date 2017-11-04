import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Registration extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            nickname: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.nickname > 0;
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render() {
        return (
            <div className="Registration">
                <form onSubmit={this.handleSubmit}>

                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </FormGroup>

                    <FormGroup controlId="nickname" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="nickname"
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </FormGroup>

                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Пароль</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e)}
                            type="password"
                        />
                    </FormGroup>

                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Зарегистрировать
                    </Button>

                </form>

                <hr/>

                <div className={"text-center"}>

                    <span>Уже есть учетная запись? </span>
                    <Link to={'/login'}>Вход</Link>

                </div>


            </div>
        );
    }


}

export default Registration;
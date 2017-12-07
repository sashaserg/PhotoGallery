import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {  FormGroup, FormControl, ControlLabel, Button, Glyphicon, Modal } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class AddPhotoButton extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            showModal: false
        }
    }

    closeModalAddPhoto() {
        this.setState({ showModal: false });

    }

    openModalAddPhoto() {
        this.setState({ showModal: true });
    }
/*
    fetchCreatePost()
    {
        console.log("1");

        const self = this; // this может меняться
        const action = "/api/user/1/createPost"; // куда посылаем

        fetch(action,
            {
                headers:
                    {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                    },

                credentials: 'same-origin',
                method:"POST"
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
                        console.log("good");

                    });
                }
            )
            .catch(function(err)
            {
                console.log('Fetch Error :-S', err);
            });

    }
*/
    render()
    {
        return(
            <div>
                <Button className={"btn-circle btn-lg"} id={"AddPhotoButton"} onClick = { (e) => { this.openModalAddPhoto(e) }   } ><Glyphicon glyph="camera" /></Button>
                <Modal show={this.state.showModal} onHide = { (e) => { this.closeModalAddPhoto(e) }   }>
                    <Modal.Header closeButton>
                        <Modal.Title>Новое фото</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form encType={"multipart/form-data"} method={"POST"} action={"/api/user/1/createPost"}>

                            <FormGroup controlId="file" bsSize="large">
                                <ControlLabel>Фотография</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="file"
                                />
                            </FormGroup>

                        </form>

                        <div>

                            <img className={"newPhotoHolder"} src={"https://hakimziad.files.wordpress.com/2017/02/face-with-question-mark.jpg?w=1200"}/>

                        </div>

                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick = { (e) => { /*this.fetchCreatePost();*/ this.closeModalAddPhoto(e) } } bsStyle={"success"}>Опубликовать</Button>
                        <Button onClick = { (e) => { this.closeModalAddPhoto(e) } } bsStyle={"danger"}>Отмена</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }

}

export default AddPhotoButton;
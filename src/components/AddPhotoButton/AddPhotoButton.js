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

                        <form encType={"multipart/form-data"} method={"POST"}>

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
                        <Button onClick = { (e) => { this.closeModalAddPhoto(e) }   } bsStyle={"success"}>Опубликовать</Button>
                        <Button onClick = { (e) => { this.closeModalAddPhoto(e) }   } bsStyle={"danger"}>Отмена</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }

}

export default AddPhotoButton;
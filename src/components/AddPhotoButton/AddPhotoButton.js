import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {  Button, Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class AddPhotoButton extends Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(

            <Button className={"btn-circle btn-lg"} id={"AddPhotoButton"}><Glyphicon glyph="camera" /></Button>

        )
    }

}

export default AddPhotoButton;
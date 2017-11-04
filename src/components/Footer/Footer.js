
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'



class Footer extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return  (

                <div id={"Footer"}>

                    <div className={"text-center"}>2017, PSaP. Все права защищены</div>

                </div>

        )
    }
}

export default Footer;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, Glyphicon, FormControl, FormGroup } from 'react-bootstrap'

class PostElement extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className={"PE"}>
                <div className={"PEHeader"}>
                    <div className={"PEHUserImage"}>

                        <Link to={'/best'}>

                            <Image src={"http://www.razlib.ru/psihologija/upravlenie_sostojaniem/square.jpg"} circle/>

                        </Link>

                    </div>
                    <div className={"PEHUserNickname"}>

                        <Link to={"/user/2"}>

                            User Nickname

                        </Link>

                    </div>
                </div>
                <div className={"PEBody"}>
                    <div className={"PEBUserPhoto"}>

                        <Link to={"/home"}>

                            <Image src={"https://previews.123rf.com/images/reamolko/reamolko1502/reamolko150200073/36802200-Crispy-cracker-isolated-Crunchy-biscuit-Yellow-square-cookie--Stock-Vector.jpg"}/>

                        </Link>

                    </div>
                    <div className={"PEBSymbol"}>
                        <Glyphicon glyph={"star"}/>
                    </div>
                    <div className={"PEBLikesCount"}>
                        <p>23 отметки нравится</p>
                    </div>
                    <div className={"PEBUserComments"}>
                        Комментарии
                    </div>
                </div>
                <div className={"PEFooter"}>
                    <div>
                        <form>
                            <FormGroup bsSize="large">
                                <FormControl type="text" placeholder="Add a comment..." />
                            </FormGroup>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostElement;
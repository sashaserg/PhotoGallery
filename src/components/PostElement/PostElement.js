import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, Glyphicon, FormControl, FormGroup, Collapse } from 'react-bootstrap'

class PostElement extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
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

                            User Nickname {this.props.userId}

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

                        <Glyphicon glyph={"heart"}/>

                    </div>

                    <div className={"PEBLikesCount"}>

                        <p>У вас 23 нравится</p>

                    </div>

                    <div className={"PEBUserComments"}>

                        <a onClick={() => this.setState({ c_open: !this.state.c_open })}>
                            Комментарии
                        </a>

                        <Collapse in={this.state.c_open}>

                            <div>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.

                            </div>

                        </Collapse>

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
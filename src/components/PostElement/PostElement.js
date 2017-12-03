import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, Glyphicon, FormControl, FormGroup, Collapse } from 'react-bootstrap'

class PostElement extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            comments:[]
        };
    }


    componentWillMount()
    {
        this.fetchComments( this.props.postId )
    }

    fetchComments( id_post = 3 )
    {
        console.log("fetchComments");
        const self = this; // this может меняться
        const action = "/api/comments/" + id_post; // куда посылаем

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
                        self.setState({comments:data});
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

        const comments = this.state.comments.map( ( comment ) => {

           return(
               <div>
                   {comment.name + ": " + comment.text}
               </div>
           );

        });

        return(
            <div className={"PE"}>

                <div className={"PEHeader"}>

                    <div className={"PEHUserImage"}>

                        <Link to={'/user/' + this.props.userId}>

                            <Image src={this.props.user_avatar} circle/>

                        </Link>

                    </div>

                    <div className={"PEHUserNickname"}>

                        <Link to={'/user/' + this.props.userId}>

                            {this.props.user_nickname}

                        </Link>

                    </div>

                </div>

                <div className={"PEBody"}>

                    <div className={"PEBUserPhoto"}>

                        <Link to={"/home"}>

                            <Image src={this.props.post_pic}/>

                        </Link>

                    </div>

                    <div className={"PEBSymbol"}>

                        Мне нравится

                    </div>

                    <div className={"PEBLikesCount"}>

                        <p>{this.props.post_rating} нравится</p>

                    </div>

                    <div className={"PEBUserComments"}>

                        <a onClick={() => this.setState({ c_open: !this.state.c_open })}>
                            Комментарии
                        </a>

                        <Collapse in={this.state.c_open}>

                            <div>

                                {
                                    comments
                                }

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
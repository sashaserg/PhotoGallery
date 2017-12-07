import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, Glyphicon, FormControl, FormGroup, Collapse } from 'react-bootstrap'

class PostElement extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            comments:[],
            rating_bool: true
        };
    }


    componentWillMount()
    {
        this.fetchComments( this.props.postId );
        this.setState({rating: this.props.post_rating});
    }

    updateRating()
    {
        if(this.state.rating_bool)
        {
            this.setState({rating: this.state.rating + 1});
        }
        else
        {
            this.setState({rating: this.state.rating - 1});
        }
        this.setState({rating_bool: !this.state.rating_bool});
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

                   <span>
                       <a href={ "user/" + comment.id_user }> { comment.nickname + ": " } </a>
                        </span>
                   <span> { comment.text } </span>

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

                        <p onClick={ (e) => { this.updateRating() } }>Мне нравится</p>

                    </div>

                    <div className={"PEBLikesCount"}>

                        <p><span className={ "text-red" }>{this.state.rating} </span>Мне нравится</p>

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
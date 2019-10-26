import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Button from './components/Button';
import MessageAlerts from './components/MessageAlerts';
import { GET_POSTS, GET_FAV_POSTS, PUT_POST, ADD_POST, DELETE_POST, PUT_LIKES } from './actions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            message: { text: '', alert: '' }
        }
    }

    componentDidMount() {
        this.props.getPosts();
    }


    confirmDelete(post) {

        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to do Delete the Post ?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deletePost(post)
                },
                {
                    label: 'No',
                }
            ]
        })
    }


    timerMessage = (duration) => {
        setTimeout(() => {
            this.setState({ message: { text: '', alert: '' } });
        }, duration);
    }


    render() {
        return (
            <div>
                <div className="row">

                    <h1>Enter Your post</h1>

                    <div className="col-lg-12">
                        {
                            this.state.message.text !== '' ? (

                                <div>
                                    <MessageAlerts alert_type={`${this.state.message.alert}`} alert_role="alert" message_txt={`${this.state.message.text}`} />
                                </div>

                            ) : ''



                        }
                    </div>
                </div>

                <div className="row">

                    <textarea onChange={(event) => this.inputChanged(event, 'postTxt')} className="form-control" rows="3" cols="96" name="postTxt" id="postTxt"></textarea>
                    <div className="col-lg-12">

                        <br />

                        <div className="form-group text-right">

                            <Button alertType="primary" handler={this.addPost} caption="POST" />

                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-12 col-md-10 mx-auto">

                        {(this.props.posts || []).map(post => {
                            return (
                                <div className="post-preview" key={post.id}>

                                    <p className="blockquote">
                                        <blockquote>
                                            <p>{post.post_txt}</p>
                                        </blockquote>

                                    </p>

                                    <div className="bd-example">
                                        <Button alertType="btn btn-success" handler={() => { this.likePost(post) }} icon="fa fa-heart" count={post.likes} caption="Like" />&nbsp;
                                        <Button alertType="btn btn-danger" handler={() => { this.confirmDelete(post) }} icon="fa fa-trash-o fa-lg" caption="DELETE" />
                                    </div>

                                    <p className="post-meta">Posted by
                                        on {post.date_posted}
                                    </p>
                                    <hr />

                                </div>
                            )
                        })}
                    </div>

                </div>


            </div>
        )
    }

    inputChanged = (event, field) => {
        this.setState({ [field]: event.target.value });
    }

    addPost = (e) => {
        e.preventDefault();
        this.props.addPost({ title: this.state.postTxt });
        this.setState({
            message: { text: 'Your post Successfully Saved  ', alert: 'success' }
        });
        this.timerMessage(1000);
    }

    deletePost = (post) => {
        // alert(post.id)
        this.props.deletePost(post.id);
        this.setState({
            message: { text: 'Your post Successfully Deleted ', alert: 'success' }
        });
        this.timerMessage(1000);
    }

    likePost = (post) => {
        //alert(post.id)
        this.props.likePost(post.id);
        this.setState({
            message: { text: 'Your have like this post ', alert: 'success' }
        });
        this.timerMessage(1000);
    }







}

const mapStateTopProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch({ type: GET_POSTS });
        },
        addPost: (post) => {
            dispatch({ type: ADD_POST, value: post });
        },
        deletePost: (postId) => {
            dispatch({ type: DELETE_POST, value: postId });
        },

        likePost: (postId) => {
            console.log('dispatch likes', postId)
            dispatch({ type: PUT_LIKES, value: postId });
        },


    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Posts);

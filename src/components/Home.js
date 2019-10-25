
import React, { Component } from 'react'
import Posts from '../Posts';

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    render() {
        return (
            <div>
                <Posts posts={this.state.posts} />
            </div>
        )
    }
}

export default Home

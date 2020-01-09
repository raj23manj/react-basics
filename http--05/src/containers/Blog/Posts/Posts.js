import React, { Component } from 'react';
import axios from '../../../axios';
import { Route, Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';


import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        //this.setState({ selectedPostId: id });
        this.props.history.push({ pathname: '/posts/' + id });
        //this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                {/* {...this.props} passes the complete (match, history)props of the posts container to post component 228
                    match={this.props.match} or use this in the child component
                    import { withRouter } from 'react-router-dom'
                */ }
                return (
                    //<Link to={'/posts/' + post.id} key={post.id}> // one way to do this, and can be handled in the handler
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        {...this.props}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    //</Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* this is done to ensure that id gets appended to localhost:3000/posts/3 
                    , or else it will append like localhost:3000/3 */}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>

        );
    }
}

export default Posts;
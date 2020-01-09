import React, { Component } from 'react';
// import axios from 'axios';
// custom import of header for interceptors
//import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
// import { Route, Link } from 'react-router-dom';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    // used to send http requests 
    // componentDidMount() {
    // }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* pathname: this.props.match.url + '/new-post' => to get relative path 229 dynamic path 
                                usually generates an absolute path, example.com/new
                            */}
                            {/* <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li> */}

                            <ul>
                                {/* to make a route active , by default it adds active class, 
                                to add custom my-active class or add custom styles*/}
                                <li><NavLink
                                    to="/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Posts</NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                            </ul>

                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                {/* switch is used to match only one route it first encounters, when routes names are same  
                    if not renders all the routes. THe order matters, coz :id thinks new-post is a value 
                    hence position of the route matters 235 */}
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
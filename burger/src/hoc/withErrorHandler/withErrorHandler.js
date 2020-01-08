import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// Global Error Handling Interceptor
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        // this gets called only once when <WrappedComponent {...this.props} /> gets loaded and but before loading the component
        // when pre fetching the data in the wrappedcomponent using componentDidMount() and error throws, then modal does not get 
        // displayed see 214. The componentDidMount hook gets called only when all the child components gets rendered
        // componentDidMount() {}

        // global interceptors to handle errors
        // instead of using this hook which will be removed in future, we can use a constructor

        // constructor(props) {
        //     super(props);
        //     this.state = {...}
        // }

        componentWillMount() {
            // request interceptor
            this.reqInterceptor = axios.interceptors.request.use(req => {
                // clear global error state before sending request, or else previous error stays
                this.setState({ error: null });
                return req;
            });

            // response interceptor
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        // linke angular ngDestroy to unmount when routing to other pages if using this in each
        // component and leads to memory leak if unmounted
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
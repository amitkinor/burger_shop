import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axiosInstance) => {
  return class extends Component {
    state = {
      error: null
    }

    componentDidMount() {
      axiosInstance.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      axiosInstance.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
        },
      );
    }

    errorConfirmHandler = () => {
      this.setState({error: null});
    }

    render(){
      const { error } = this.state;
      return (
        <>
          <Modal show={error} modalClosed={this.errorConfirmHandler}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
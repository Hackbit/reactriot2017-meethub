import React, { Component } from 'react';

const LoaderHOC = (WrappedComponent) =>
  class Loader extends Component {
      render() {
        const { loading, ...props} = this.props;
        return (
            loading ? <div>Loading...</div> :
                <WrappedComponent {...props}/>
        );
      }
  };

export default LoaderHOC;
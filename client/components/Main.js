import React from 'react';
import { Link } from 'react-router';
import Header from './Header';

const Main = React.createClass({

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <Header />
        {/* We use cloneElement here so we can auto pass down props */}
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }

});

export default Main;

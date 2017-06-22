import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({

  render() {

    return (
      <header className="site-header">
      	<div className="header-container">
      		<div className="logo">
      			<Link to="/">
              <img src="http://thinkanalytics.com/wp-content/themes/thinkanalytics/images/thinkanalytics.png" title="Think Analytics" />
            </Link>
      		</div>
      	</div>
      </header>
    );
  }
});

export default Header;

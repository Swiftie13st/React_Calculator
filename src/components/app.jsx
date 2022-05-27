import React, { Component } from 'react';
import NavBar from './navBar';

class APP extends Component {
    state = {  } 
    render() { 
        return (
          <React.Fragment>
              <NavBar/>
            <div className="container">
              <h1>Hello world</h1>
            </div>
          </React.Fragment>
        );
    }
}
 
export default APP;
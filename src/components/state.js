import React, { Component } from 'react';

class State extends Component {
    state = {
        user: ''
    }

    render() {
        return ( <div>{this.state.user}</div> );
    }
}
 
export default State;
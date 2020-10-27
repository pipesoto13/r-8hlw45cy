import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
    };
    
    this.changeState = this.changeState.bind(this);
  }

  changeState(event) {
    if (this.state.checked) {
      this.setState({
        checked: false
      });
    } else {
      this.setState({
        checked: true
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" onChange={this.changeState} checked={this.state.checked}/> Mostrar información importante</label>
          {this.state.checked ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> : null}
      </div>
    );
  }
}

export default App;

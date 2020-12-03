import { render } from '@testing-library/react';
import { Component } from 'react';
import '../Styling/App.css';
import ChatApp from "./ChatApp"

export default class App extends Component {

  state = {
    username: "",
    submitted: false
  }
  
  usernameChangeHandler = (event) => {
    return this.setState({ username: event.target.value })
  }

  usernameSubmitHandler = (event) => {
    event.preventDefault()
    return this.setState({ username: this.state.username, submitted: true })
  }

  render() {
    if (this.state.submitted) {
      return <ChatApp username={ this.state.username } />
    }

    return (
      <div className="App">
        <form
          onSubmit={ this.usernameSubmitHandler }
          className="username-container">
            <h1>project_GHOST</h1>
              <input
                type="text"
                onChange={ this.usernameChangeHandler }
                placeholder="Enter username"
              />
              <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

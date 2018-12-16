import React from "react";
import ReactDOM from "react-dom";
import GistList from "./Components/GistList";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      data: []
    };
  }
  handleChange = event => {
    this.setState({ userName: event.target.value });
  };
  handleSubmit = event => {
    if (!this.state.userName.trim()) {
      return;
    }
    const url = `https://api.github.com/users/${this.state.userName}/gists`;
    event.preventDefault();
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ data }, function() {
          this.setState({
            userName: ""
          });
        });
      });
    event.target.value = "";
  };
  render() {
    return (
      <div className="home">
        <h3>
          Enter a username and get the full list of public gists for the user
        </h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="userSearch">
              <Input
                type="text"
                placeholder="Enter GitHub Id:"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </Label>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
        <div className="gistList">
          {this.state.data.map(data => (
            <GistList gistdata={data} length={data.length} />
          ))}
        </div>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <header>
        <h1>Github Gists</h1>
      </header>

      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

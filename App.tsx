import * as React from 'react';
import { useEffect, useLayoutEffect } from 'react';
import { Child } from "./Child";
import './style.css';



class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>{ this.state.value }</h3>
      </div>
    );
  }
}


export default function App() {

  console.log("Rendering App...");

  useEffect(() => {
    console.log("Running useEffect ...");
  },[]);

  useLayoutEffect(() => {
    console.log("Running useLayoutEffect ...");
  },[]);

  return (
    <div className="App">
      {console.log("Before child.")}
      <Child />
      <NameForm />
      {console.log("After child.")}
    </div>
  );
}

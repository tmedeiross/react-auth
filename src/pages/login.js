import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    formData: {}
  };

  handleLogin = async e => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8090");

    const { token } = response.data;

    localStorage.setItem("tokenID", token);

    this.props.history.push("/dashboard");
  };

  handleChange = e => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <input type="text" name="email" onChange={this.handleChange} />
        <input type="password" name="password" onChange={this.handleChange} />
        <button type="submit">Logar</button>
      </form>
    );
  }
}

import React, { Component } from "react";
import ApiService from "../../ApiService";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class AddUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      salary: "",
      message: null,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      userName: this.state.userName,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      salary: this.state.salary,
    };

    ApiService.addUser(user)
      .then((res) => {
        this.setState({
          message: user.userName + "님의 정보가 성공적으로 등록되었습니다.",
        });
        console.log(this.state.message);
        this.props.history.push("/users");
      })
      .catch((err) => {
        console.log("saveUser() error", err);
      });
  };

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Add User
        </Typography>
        <form style={formContainer}>
          <TextField
            type="text"
            placeholder="please input your username"
            name="userName"
            value={this.state.userName}
            onChange={this.onChange}
          />

          <TextField
            type="password"
            placeholder="please input your password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <TextField
            placeholder="please input your first name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
          />

          <TextField
            placeholder="please input your last name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
          />

          <TextField
            type="number"
            placeholder="please input yout age"
            name="age"
            value={this.state.age}
            onChange={this.onChange}
          />

          <TextField
            type="number"
            placeholder="please input your salary"
            name="salary"
            value={this.state.salary}
            onChange={this.onChange}
          />

          <Button variant="contained" color="primary" onClick={this.saveUser}>
            SAVE
          </Button>
        </form>
      </div>
    );
  }
}

const formContainer = {
  display: "flax",
  flexFlow: "row wrap",
};

const style = {
  display: "flax",
  justifyContent: "center",
};

export default AddUserComponent;

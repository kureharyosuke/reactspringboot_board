import React, { Component } from "react";

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
        <h2>Add User</h2>
        <form>
          <div>
            <label>User Name:</label>
            <input
              type="text"
              placeholder="please input your username"
              name="userName"
              value={this.state.userName}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="please input your password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>First Name:</label>
            <input
              placeholder="please input your first name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              placeholder="please input your last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>Age:</label>
            <input
              type="number"
              placeholder="please input yout age"
              name="age"
              value={this.state.age}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>Salary</label>
            <input
              type="number"
              placeholder="please input your salary"
              name="salary"
              value={this.state.salary}
              onChange={this.onChange}
            />
          </div>

          <button onClick={this.saveUser}>Save</button>
        </form>
      </div>
    );
  }
}

export default AddUserComponent;

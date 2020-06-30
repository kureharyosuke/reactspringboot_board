import React, { Component } from "react";

class UserListComponent extends Component {
  constructor(props) {
    super(porps);

    this.state = {
      users: [],
      message: null,
    };
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList = () => {
    ApiService.fetchUsers()
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log("🤬reloadUserList() Error!", err);
      });
  };

  deleteUser = (userID) => {
    ApiService.deleteUser(userID)
      .then((res) => {
        this.setState({
          message: "User Deleted Successfully.",
        });
        this.setState({
          users: this.state.users.filiter((user) => user.id !== userID),
        });
      })
      .catch((err) => {
        console.log("deleteUser() Error!", err);
      });
  };

  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    this.props.history.push("/add-user");
  };

  render() {
    return (
      <div>
        <h2>User List</h2>
        <button onClick={this.addUser}> Add User </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
                <td>
                  <button onClick={() => this.editUser(user.id)}>Edit</button>
                  <button onClick={() => this.deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserListComponent;

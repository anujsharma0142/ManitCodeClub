import ReactDOM from "react-dom";
import React, { Component } from "react";

import Tabs from "./Tabs";
import Panel from "./Panel";

import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], userId: 4, array: [5, 1, 3, 4, 6] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
          });
          console.log(this.state.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { data, array, userId } = this.state;
    return (
      <div className="main-container">
        <div style={{ marginLeft: "33px" }}>
          <h1>User Profile</h1>
        </div>
        <hr />
        <br />
        <Tabs>
          <Panel title="Problems">
            {data.map((event) => {
              return (
                <>
                  <div key={event.id}>
                    <h3>
                      <label>Name : </label>
                      {event.name}
                    </h3>
                  </div>
                  <label>Email: </label>
                  <span>{event.email}</span>
                  <br />
                  <label>Phone: </label>
                  <span>{event.phone}</span>
                  <br />
                </>
              );
            })}
          </Panel>
          <Panel title="Editorial">
            {data
              .filter((event) => event.id !== userId)
              .map((event) => {
                return (
                  <>
                    <div key={event.id}>
                      <h3>
                        <label>Name : </label>
                        {event.name}
                      </h3>
                    </div>
                    <label>Email: </label>
                    <span>{event.email}</span>
                    <br />
                    <label>Phone: </label>
                    <span>{event.phone}</span>
                    <br />
                  </>
                );
              })}
          </Panel>
          <Panel title="Hints">
            {data
              .filter((event) => array.includes(event.id))
              .map((event) => {
                return (
                  <>
                    <div key={event.id}>
                      <h3>
                        <label>Name : </label>
                        {event.name}
                      </h3>
                    </div>
                    <label>Email: </label>
                    <span>{event.email}</span>
                    <br />
                    <label>Phone: </label>
                    <span>{event.phone}</span>
                    <br />
                  </>
                );
              })}
          </Panel>
        </Tabs>
      </div>
    );
  }
}

export default Profile;

const rootElement = document.getElementById("root");
ReactDOM.render(<Profile />, rootElement);
import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
    console.log("LifeCycle is just started");
  }

  componentWillMount() {
    console.log("LifeCycle Will Mount()");
  }

  componentDidMount() {
    console.log("LifeCycle Did Mount()");
  }

  changeState() {
    this.setState({ hello: "Geek!" });
  }

  render() {
    return (
      <div>
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <p onClick={this.changeState.bind(this)}>Press Here!</p>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default LifeCycle;

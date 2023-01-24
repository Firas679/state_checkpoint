import React from "react";
import Counter from "./Component/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Firas",
      Bio: "Student At GoMyCode",
      count: 0,
      show: false,
    };
  }
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    let Bio = this.state.Bio;
    return (
      <div>
        <div className="App">
          { this.state.show  &&
            <>
              <h3> My name's' {this.state.name} </h3>
              <p>{Bio}</p>
              <Counter />
            </>
          }
          <h3> Counter </h3>
        </div>
          <button onClick={this.toggleShow}> Click To see some MAGIC</button>
      </div>
    );
  }
}

export default App;

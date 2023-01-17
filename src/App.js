import React from "react";
import Counter from './Component/Counter';

class App extends React.Component {

  constructor(){
    super()

    this.state= {
        name:'Firas',
        Bio:'Student At GoMyCode',
        count:0,
        show: false
    }
  }
  toggleShow =()=>{
    this.setState({show: !this.state.show})
  }

  render () {
    let Bio = this.state.Bio
    return (
      <div className="App">
       <h3> My name's' {this.state.name} </h3>
       <p>{Bio}</p>
       <h3> Counter </h3>
       <button onClick={this.toggleShow}> Click To see some MAGIC</button>
        {this.state.show && <Counter/>}
      </div>
    )
  }
}

export default App;
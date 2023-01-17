import React from 'react'

class Counter extends React.Component{
  constructor(){
    super()
    this.state={
        Counter:0,
        intervalle : null
    }
   }

   componentDidMount(){
    this.setState({intervalle : setInterval(()=>this.setState({Counter : this.state.Counter + 1}),1000)})
   }
   componentDidUpdate(){}

   componentWillUnmount(){
    clearInterval(this.state.intervalle)
   }

   render(){
    return (
        <div>
            <h3> {this.state.Counter} </h3>
        </div>
    )
   }
}

export default Counter
import React, { Component } from 'react'

export default class classOne extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title=`Clicked ${this.state.count} times`
    }


  render() {
    return (
      <div>
        <div className="btn btn-primary m-4 p-5 text-white bg-black rounded-md w-72 flex justify-center" onClick={()=>this.setState({count:this.state.count+1})}>Clicked {this.state.count} times</div>
        
      </div>
    )
  }
}

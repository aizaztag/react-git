import React , { useState } from 'react';

class SetStates extends React.Component {

    state = { count: 0 }
    
    handleIncrement = () => {
        this.changeCount('+' , 1)
    }

    changeCount = (opretor , num) =>{
        this.setState((prevState) => {
            console.log(  opretor)
            return {count:prevState.count + parseInt(opretor) + num }
        })
    }
    
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 })
    }
      render() {
        return (
          <div>
            <div>
              {this.state.count}
            </div>
            <button onClick={this.handleIncrement}>Increment by 1</button>
            <button onClick={this.handleDecrement}>Decrement by 1</button>
          </div>
        )
      }
    }

export  default SetStates;
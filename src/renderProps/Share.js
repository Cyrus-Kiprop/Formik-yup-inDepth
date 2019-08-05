import React, { Component } from 'react'

class Share extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }

    }
    incrementCount=()=>{
        this.setState(prevState =>{
            return {count:prevState.count    + 1}
        })
    }
   
    render() {
        // passing the shared fuctionality as a prop to be accessed by the components requring the fuctionality
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Share

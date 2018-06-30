
import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render(){
        return (
            <div className="panel panel-primary">
            <div className="panel-heading">Score</div>
            <div className="panel-body text-center">
            <p> Click count:{this.state.count}</p>
            <button className="btn btn-primary" onClick={this.handleIncrement}>
            incremenent </button>
                </div>
                </div>
        );
    }
}

export default Counter;
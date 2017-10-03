import React, { Component } from 'react';

class OrderItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };
    }


    subTotal() {
        if (this.state.total != 0) {
            this.setState({
                total: parseInt(this.state.total) - 1
            });
        }
    }

    addTotal() {
        this.setState({
            total: parseInt(this.state.total) + 1
        });
    }

    render() {
        return (
            <div>
                <b>Item</b> <button disabled={this.state.total == 0} onClick={this.subTotal.bind(this)}>-</button>{this.state.total}<button onClick={this.addTotal.bind(this)}>+</button>

            </div>
        );
    }
}

export default OrderItem;

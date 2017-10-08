import React, {Component} from 'react';
import FAB from '@react-mdc/fab';
import FontAwesome from 'react-fontawesome';

/**
 * @author Alaa Attya <alaa.attya@tajawal.com>
 */
class OrderItemComponent extends Component {

    /**
     *
     * @param props
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            count: this.props.count
        };
    }

    /**
     *
     * @private
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    _decrement() {
        if (this.state.count !== 0) {
            this.setState({
                count: parseInt(this.state.count, 10) - 1
            });
        }
    }

    /**
     *
     * @private
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    _increment() {
        this.setState({
            count: parseInt(this.state.count, 10) + 1
        });
    }

    /**
     *
     * @return {XML}
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    render() {
        return (
            <div>
                <b>{this.state.title}</b>
                <FAB mini disabled={this.state.count === 0} onClick={this._decrement.bind(this)}>
                    <FontAwesome name="minus" />
                </FAB>
                {this.state.count}
                <FAB mini onClick={this._increment.bind(this)}>
                    <FontAwesome name="plus" />
                </FAB>
            </div>
        );
    }
}

export default OrderItemComponent;
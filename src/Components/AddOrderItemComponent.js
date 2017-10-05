import React, { Component } from 'react';

/**
 * @author Alaa Attya <alaa.attya@tajawa.com>
 */
class AddOrderItemComponent extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            count: 0
        };
    }

    /**
     *
     * @private
     */
    _handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    /**
     *
     * @private
     */
    _handleAddNewItem() {
        this.props.handleItemsUpdate(this.state);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this._handleTitleChange.bind(this)} />
                <button onClick={this._handleAddNewItem.bind(this)}>add</button>
            </div>
        );
    }
}

export default AddOrderItemComponent;
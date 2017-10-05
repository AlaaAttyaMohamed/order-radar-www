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
            title: ''
        };
    }

    /**
     *
     * @private
     */
    _handleTitleChange() {

    }

    /**
     *
     * @private
     */
    _handleAddNewItem() {

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
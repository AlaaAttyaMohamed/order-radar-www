import React, {Component} from 'react';
import Textfield from '@react-mdc/textfield';
import FAB from '@react-mdc/fab';

/**
 * @author Alaa Attya <alaa.attya@tajawa.com>
 */
class AddOrderItemComponent extends Component {

    /**
     *
     * @param props
     * @author Alaa Attya <alaa.attya@tajawal.com>
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
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    _handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    /**
     *
     * @private
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    _handleAddNewItem() {
        if(this.state.title !== '') {
            this.props.handleItemsUpdate(this.state);
        }
    }

    render() {
        return (
            <div>
                <Textfield>
                    <Textfield.Input id="title" onChange={this._handleTitleChange.bind(this)} />
                    <Textfield.Label htmlFor="title">
                        Item title
                    </Textfield.Label>
                </Textfield>

                <FAB onClick={this._handleAddNewItem.bind(this)}>
                    Add
                </FAB>


            </div>
        );
    }
}

export default AddOrderItemComponent;
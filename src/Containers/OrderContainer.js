import React, {Component} from 'react';
import AddOrderItemContainer from '../Components/AddOrderItemComponent';
import OrderItemComponent from '../Components/OrderItemComponent';
import Grid, {Cell} from '@react-mdc/layout-grid';

/**
 * @author Alaa Attya <alaa.attya@tajawal.com>
 */
class OrderContainer extends Component {

    /**
     *
     * @param props
     *
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            restaurantTitle: '',
            items: []
        };
    }

    /**
     *
     * @return {Array}
     * @private
     */
    _renderItems() {
        let items = [];
        for (let i = 0; i < this.state.items.length; i++) {
            items.push(<OrderItemComponent key={i} title={this.state.items[i].title}
                                           count={this.state.items[i].count}/>);
        }
        return items;
    }

    /**
     *
     * @param item
     * @private
     */
    _pushNewItem(item) {
        let items = this.state.items;
        items.push(item);
        this.setState({
            items: items
        });
    }

    /**
     *
     * @return {XML}
     */
    render() {
        return (
            <Grid>
                <Grid.Cell col={4}>
                </Grid.Cell>
                <Grid.Cell col={4}>
                    <AddOrderItemContainer handleItemsUpdate={this._pushNewItem.bind(this)}/>
                    {this._renderItems()}
                </Grid.Cell>
                <Grid.Cell col={4}></Grid.Cell>
            </Grid>
        );
    }
}

export default OrderContainer;
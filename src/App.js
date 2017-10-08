import React, {Component} from 'react';
import 'material-components-web/dist/material-components-web.min.css';
import 'react-mdl/extra/material.js';
import './App.css';
import OrderContainer from './Containers/OrderContainer';
import Toolbar from '@react-mdc/toolbar';

class App extends Component {

    render() {
        return (
            <div>
                <Toolbar fixed>
                    <Toolbar.Row>
                        <Toolbar.Section align="start">
                            <Toolbar.Title>Order radar</Toolbar.Title>
                        </Toolbar.Section>
                    </Toolbar.Row>
                </Toolbar>
                <br /><br /><br />
                <div>
                    <OrderContainer/>
                </div>
            </div>
        );
    }
}

export default App;

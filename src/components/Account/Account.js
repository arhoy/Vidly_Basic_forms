import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import AccountNav from './AccountNav/AccountNav';
import Orders from '../../components/Orders/Orders';
import Like from '../../components/UI/Like/Like';
// nested routing
class Account extends Component {
    state = {
        accountDetails: [
            {value: 'orders',displayValue: 'Orders'},
            {value: 'billingInfo',displayValue: 'Your Billing Info'},
            {value: 'like',displayValue: 'Like'},
            {value: 'superLike',displayValue: 'Super Like'}
        ]
    }
    render() {
        const {accountDetails} = this.state;
        return (
            <React.Fragment>
                <AccountNav
                    accountDetails = {accountDetails}
                />
                <Route path = "/account/like" component = {Like} />
                <Route path = "/account/superlike" render = { (props)=>  <Like color = "red" className = "fa fa-heart" size = "5x" {...props} /> } />
                <Route path = "/account/orders" component = {Orders}/>
            </React.Fragment>
        
        );
    }
}

export default Account;

/**
What I want you to understand is that Route is something that can be used in any component, not just App.js.
Route can be used to render content dynamically with different urls.
Route is like a regular component just like other components we have created so far. 
Route has properties with specific props, i.e match, params, history.
 */
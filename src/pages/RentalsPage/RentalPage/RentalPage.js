import React, { Component } from 'react';
import './RentalPage.css';

class RentalPage extends Component {
    goBackEventHandler = ()=>{
        this.props.history.push('/rentals');
    // this.props.history.replace('/rentals'); // use in login pages. i.e click back button will not work.
    }
    render() {
        const rentalId = this.props.match.params.id; //this.props is coming from the Route component it is wrapped in, inside App.js
        return (
            <div className = "RentalPage">
                <div className = "RentalPage__header">
                    This is the rental Page for rental id:  {rentalId}
                </div>
                <button onClick = {this.goBackEventHandler} className = "btn btn-warning">Go Back</button>
            </div>
        
        );
    }
}
export default RentalPage;
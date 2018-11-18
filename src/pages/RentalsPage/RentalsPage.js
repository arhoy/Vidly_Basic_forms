import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import {Link} from 'react-router-dom';

class RentalsPage extends Component {
    state = {
        rentals: [
            {id: '1',displayValue: 'Rental 1'},
            {id: '2',displayValue: 'Rental 2'},
            {id: '3',displayValue: 'Rental 3'},
        ]
    }
    render() {
        return (
            <div>
                <Header/>
                <div>
                <h1>Rentals Page</h1>
                </div>

                <div>
                    <ul className="navbar-nav">
                        {this.state.rentals.map(rental=>(
                            <li key ={rental.id} className="nav-item active">
                                 <Link className="nav-link" to={`rentals/${rental.id}`} >{rental.displayValue}<span className="sr-only">(current)</span></Link>
                            </li>
                        ))}
                    </ul>   
                </div>
               
            </div>
        );
    }
}

export default RentalsPage;

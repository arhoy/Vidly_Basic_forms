
import React, { Component } from 'react';
import {Button} from 'reactstrap';

class NotFoundPage extends Component {
    returnHomeHandler = () =>{
        this.props.history.push('/');
    }

    render() {
        return (
            <div style = {{marginTop: '3rem'}}>
                <h2>Houstan, we have a problem</h2>
                    <p>
                    Sorry, the page you are looking for does not exist!
                    </p>
                <Button onClick = {this.returnHomeHandler} color = "secondary">Return to Home</Button>  
            </div>
        );
    }
}
export default NotFoundPage;

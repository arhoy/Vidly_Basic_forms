import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RentalsPage from './pages/RentalsPage/RentalsPage';
import RentalPage from './pages/RentalsPage/RentalPage/RentalPage';
import CustomersPage from './pages/CustomersPage/CustomersPage';
import AccountPage from './pages/AccountPage/AccountPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MoviePage from './pages/MoviePage/MoviePage';
import MovieFormPage from './pages/MovieFormPage/MovieFormPage'
import {Route, Switch,Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path = "/customers" render = { (props) => <CustomersPage type = "vp"  {...props} /> } />
          <Route path = "/rentals/:id" component = {RentalPage}/>
          <Route exact path = "/rentals" component = {RentalsPage} />
          <Route  path = "/account" component = {AccountPage} />
          <Route  path = "/account/:details" component = {AccountPage} />
          <Route exact path = "/movies/new" component = {MovieFormPage}/> 
          <Route path = "/movies/:id" component = {MoviePage} />
          <Redirect exact from  = "/movies" to =  "/"/>             {/* // in this case movies is the main page */}  
          <Route path = "/login" component = {LoginPage}/> 
          <Route path = "/register" component = {RegisterPage}/> 
         
          <Route path = "/not-found" component = {NotFoundPage}/>
          <Route exact path = "/" component = {HomePage} />
          <Redirect to = "/not-found"/>
        </Switch>
      </div>
    );
  }
}

export default App;

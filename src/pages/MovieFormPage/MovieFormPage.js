import React from 'react';
import Header from '../../components/Header/Header';
import MovieForm from '../../components/UI/MovieForm/MovieForm';

const MovieFormPage = (props) => {
    const submitEventHandler = (e)=>{
    
        //add new movie here.
    }
    return (
        <React.Fragment>
            <Header/>
            <h2>Movie Form</h2>
   
            <MovieForm
                props = {props}
            />
        </React.Fragment>
        
    );
};

export default MovieFormPage;
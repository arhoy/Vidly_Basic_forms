import React from 'react';
import Header from '../../components/Header/Header';
import MovieForm from '../../components/UI/MovieForm/MovieForm';

const MoviePage = (props) => {
    const returnToMoviesHandler = ()=>{
        props.history.push('/movies');
    }
   
    return (
        <div>
                <Header/>
                <h1>Specific Movie Item: </h1>
                <div> The movie id is: </div>
                <div>{props.match.params.id}</div>
                <button onClick = {returnToMoviesHandler} className = "btn btn-primary">Return to all movies</button>
                <div style = {{marginBottom: '3rem'}}></div>
                <div>  </div>
                <MovieForm
                    props = {props}
                />
        </div>
    );
};

export default MoviePage;

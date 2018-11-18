import React, { Component } from 'react';
import {getMovies} from '../../resources/fakeMovieService';
import {getGenres} from '../../resources/fakeGenreService'; 
import MovieTable from './MovieTable/MovieTable';
import {paginate} from '../../utils/paginate';
import ListGroup from '../UI/ListGroup/ListGroup';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres:[],
        pageSize: 4,
        currentPage:1,
        genreId:'',
        sortColumn: {column:'title', order: 'asc'}
    };
    componentDidMount(){
        this.setState(
            {
                movies:getMovies(),
                genres: [{_id: '',name: 'All'},...getGenres()]
            }
        )
    }

    deleteButtonEventHandler = (m)=>{
        const movies = this.state.movies.filter(movie=> movie._id !== m._id );
        this.setState({movies});
    }
    likeEventHandler = (m)=>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(m);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});

    }
    onPageChangeHandler = (page)=>{
        this.setState({currentPage:page})
    }

    onListGroupSelectHandler = (genre) =>{
       this.setState({genreId:genre._id , currentPage: 1});
    }
    sortEventHandler = (sortColumn)=>{
 
        this.setState({sortColumn});
    }

    getPagedData = ()=>{
        let filtered = this.state.genreId !== '' ? this.state.movies.filter(m=>m.genre._id === this.state.genreId) : this.state.movies;
        filtered =  _.orderBy(filtered,[this.state.sortColumn.column],this.state.sortColumn.order)
        const movies = paginate(filtered,this.state.currentPage,this.state.pageSize);
        return {
            totalCount: filtered.length,
            data: movies
        }
    }
    render() {  
        
        const result = this.getPagedData();
   //     const {totalCount, data} = this.getPagedData()
        return (
            <div>
                {
                    this.state.movies < 1 ? <h2>There are no movies in the database </h2> : <h2> Number of movies in selection: {result.totalCount}</h2>
                }

                <ListGroup
                    data = {this.state.genres}
                    itemId = {this.state.genreId}
                    onSelect = {this.onListGroupSelectHandler}
                    id = "_id"
                    displayValue = "name"
                />
        
                <MovieTable
                    onDelete = {this.deleteButtonEventHandler}
                    movies = {result.data}
                    onLike = {this.likeEventHandler}
                    pageSize = {this.state.pageSize}
                    items = {result.totalCount}
                    onPageChange = {this.onPageChangeHandler}
                    currentPage = {this.state.currentPage}
                    onSort = {this.sortEventHandler}
                    sortColumn = {this.state.sortColumn}
                />
                
            </div>
        );
    }
}

export default Movies;
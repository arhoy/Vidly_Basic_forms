import React, { Component } from 'react';
import Like from '../../UI/Like/Like';
import Pagination from '../../UI/Pagination/Pagination';
import Table from '../../UI/Table/Table';
import {Link} from 'react-router-dom';



class MovieTable extends Component {
    columns = [
        {column:'title' ,label:'Title', content: movie=> <Link to = {`/movies/${movie._id}`}> {movie.title} </Link> },
        {column:'genre.name' ,label:'Genre' },
        {column:'numberInStock' ,label:'Stock' },
        {column:'dailyRentalRate' ,label:'Rate' },
        {
         key: 'like',
         content: movie => <Like liked ={movie.liked} onLike = {()=>{this.props.onLike(movie)} } color = 'orangered' size = 'lx'/> },
        {key: 'delete', content: movie=> <button onClick = { () => {this.props.onDelete(movie)} } className = "btn btn-danger btn-sm">Delete</button>} // passing two empty obj so they will be rendered. These columns do not have headers ie. 'like' 'delete'
    ];

    render() {
      
        const {movies,onLike,onPageChange,onSort,pageSize,items,currentPage} = this.props
        return (
             <React.Fragment>
             <Table
                 columns = {this.columns}
                 data = {movies}
                 sortColumn = {this.props.sortColumn}
                 onSort = {onSort}
             />
             <Pagination 
                pageSize = {pageSize}
                items = {items}
                onPageChange = {onPageChange}
                currentPage = {currentPage}
             />

             </React.Fragment>
     
    );
    }
}

export default MovieTable;



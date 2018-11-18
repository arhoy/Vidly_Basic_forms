import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';
const Table = (props) => {
    return (
        <table className="table">
        <TableHeader
            columns = {props.columns}
            sortColumn = {props.sortColumn}
            onSort = {props.onSort}
        />
        <TableBody
            data = {props.data} 
            columns = {props.columns}
            onDelete = {props.onDelete}
            onLike = {props.onLike}
        />
        
        </table>
    );
};

export default Table;
import React, { Component } from 'react';
import Like from '../Like/Like';
import _ from 'lodash';

class TableBody extends Component {
    renderCell = (item,column)=>{
        if(column.content){
            return column.content(item);
        }
        return _.get(item,column.column);
    }
    createKey = (column)=>{
        return column.column || column.key;
    }
    render() {
  
        return (
            <tbody>
                {this.props.data.map( (item,i) =>(
                    <tr key = {i}>
                    {this.props.columns.map (col=>(
                        <td key = {this.createKey(col)}>{ this.renderCell(item,col)}</td>   //  ie. use item[col.column] for simple one layer data 
                    ))}
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getMovie} from '../../../resources/fakeMovieService';

import Joi from 'joi';
import _ from 'lodash';
import './MovieForm.css';

export default class MovieForm extends React.Component {
    state = {
        movie: {},
        form:[
            {value: '', label: 'Title',name: 'title', type: 'text', placeholder: 'ie. The Big Short'},
            {value: '', label: 'Genre',name: 'genre', type: 'select',options: ['action,comedy,thriller'], placeholder: ''},
            {value: '', label: 'Number in Stock',name: 'numberInStock', type: 'number', placeholder: '# of movies available'},
            {value: '', label: 'Rating',name: 'rating', type: 'number', placeholder: 'Your rating'},
        ],
        errors: {}
    }
    componentDidMount(){
        this.setState(
            {
                movie:getMovie(this.props.props.match.params.id),
            }
        )
        
    }
    componentDidUpdate(){
        this.fillValue();
    }
    schema = {
        title: Joi.string().min(2).required(),
        genre: Joi.any(),
        numberInStock: Joi.number().min(0).max(100),
        rating: Joi.number().min(0).max(10)
    }

    validate = ()=>{
        const errors = {};
        this.state.form.forEach(field=>{
            const validation = Joi.validate(field.value,this.schema[field.name]) 
            
            if(_.isNull(validation.error) || _.isUndefined(validation.error)){
               errors[field.name] = '';
            }
            else{
                let message = validation.error.details[0].message
                    message = _.replace(message,'value',field.label);
                errors[field.name] = message;

            }

        })
 
        return errors;
    }

    inputChangeHandler = (e,field)=>{
        const form = [...this.state.form];
        const index = form.indexOf(field);
        form[index] = {...field};
        form[index].value = e.target.value;
        this.setState({form});
    }
    fillValue = ()=>{

     
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const errors = this.validate();
        console.log(errors);
        this.setState({errors: errors || {}  });

        for(let error in errors){
            if(errors[error] !== ''){
                console.log('there is at least one error');
                return;
            }
        }
   
        this.props.props.history.push('/movies');
       
    }


  render() {

    return (
        <div className = "MovieForm__Container">
            <Form onSubmit = { (e)=>this.onSubmit(e) }  className = "MovieForm">
                {this.state.form.map(field=>(
                    <FormGroup key = {field.name}>
                        
                        {
                            field.type !== 'select'? 
                            <React.Fragment>
                                <Label for={field.name}>{field.label}</Label>
                                <Input onChange = { (e)=> {this.inputChangeHandler(e,field)} } value = {field.value} type={field.type} name={field.name} placeholder= {field.placeholder} /> 
                            </React.Fragment>
                           :
                           <React.Fragment>
                           <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option value = 'comedy'>Comedy</option>
                                <option value = 'action'>Action</option>
                                <option value = 'thriller'>Thriller</option>
                            </Input>
                           </React.Fragment>
                        }
                   
                    {this.state.errors[field.name] ? <div className = "alert alert-danger"> {this.state.errors[field.name]}  </div> : null    }    
                    </FormGroup>
                ))}
       
                <Button>Add New Movie</Button>
                <div>
                    {this.fillValue()}
                </div>
           </Form>
        
        </div>
      
    );
  }
}
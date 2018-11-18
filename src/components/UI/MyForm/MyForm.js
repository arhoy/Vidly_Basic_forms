import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Joi from 'joi';
import _ from 'lodash';
import './MyForm.css';

export default class MyForm extends React.Component {
    state = {
        form:[
            {value: '', label: 'Email',name: 'email', type: 'email', placeholder: 'Enter Email'},
            {value: '', label: 'Password',name: 'password', type: 'password', placeholder: 'Secret Password'},
        ],
        errors: {}
    }

    schema = {
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }

    validate = ()=>{
        const errors = {};
        if(this.state.form[0].value === ''){
            errors.email = 'Email is required!'
        }
        else{
            errors.email = '';
        }
        if(this.state.form[1].value === ''){
            errors.password = 'Password is required!'
        }
        else{
            errors.password = '';
        }
    
        return errors;
    }

    inputChangeHandler = (e,field)=>{
        const form = [...this.state.form];
        const index = form.indexOf(field);
        form[index] = {...field};
        form[index].value = e.target.value;
        this.setState({form});
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}  });
        if(errors){
            // return errors

        }
        else{
            // call submitEventHandler from parent
            this.props.onSubmit(e);
        }
    }


  render() {
    return (
        <div className = "MyForm__Container">
            <Form onSubmit = { (e)=>this.onSubmit(e) }  className = "MyForm">
                {this.state.form.map(field=>(
                    <FormGroup key = {field.name}>
                        <Label for={field.name}>{field.name}</Label>
                        <Input onChange = { (e)=> {this.inputChangeHandler(e,field)} } value = {field.value} type={field.type} name={field.name} placeholder= {field.placeholder} />
                    {this.state.errors[field.name] ? <div className = "alert alert-danger"> {this.state.errors[field.name]}  </div> : null    }    
                    </FormGroup>
                ))}
       
                <Button>Submit</Button>
           </Form>
        
        </div>
      
    );
  }
}
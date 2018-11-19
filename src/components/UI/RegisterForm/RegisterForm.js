import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Joi from 'joi';
import _ from 'lodash';
import './RegisterForm.css';

export default class RegisterForm extends React.Component {
    state = {
        form:[
            {value: '', label: 'Name',name: 'name', type: 'text', placeholder: 'Your Name'},
            {value: '', label: 'Username',name: 'username', type: 'email', placeholder: 'enter your email'},
            {value: '', label: 'Password',name: 'password', type: 'password', placeholder: 'Secret Password'},
        ],
        errors: {}
    }

    schema = {
        name: Joi.string().min(2).required(),
        username: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(5).required()
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
                    message = _.replace(message,'value',field.name);
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
        this.props.onSubmit(e);
    }

  render() {
    return (
        <div className = "RegisterForm__Container">
            <Form onSubmit = { (e)=>this.onSubmit(e) }  className = "RegisterForm">
                {this.state.form.map(field=>(
                    <FormGroup key = {field.name}>
                        <Label for={field.name}>{field.name}</Label>
                        <Input onChange = { (e)=> {this.inputChangeHandler(e,field)} } value = {field.value} type={field.type} name={field.name} placeholder= {field.placeholder} />
                    {this.state.errors[field.name] ? <div className = "alert alert-danger"> {this.state.errors[field.name]}  </div> : null    }    
                    </FormGroup>
                ))}
       
                <Button>Register Now</Button>
           </Form>
        
        </div>
      
    );
  }
}
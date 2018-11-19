import React from 'react';
import Header from '../../components/Header/Header';
import RegisterForm from '../../components/UI/RegisterForm/RegisterForm';

const RegisterPage = (props) => {
    const submitEventHandler = (e)=>{
        e.preventDefault();
        props.history.push('/account');
    }
    return (
        <React.Fragment>
            <Header/>
            <h2>Register</h2>
            <RegisterForm
                props = {props}
                onSubmit = {submitEventHandler}
            />
        </React.Fragment>
        
    );
};

export default RegisterPage;
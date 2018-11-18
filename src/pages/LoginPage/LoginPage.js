import React from 'react';
import Header from '../../components/Header/Header';
import MyForm from '../../components/UI/MyForm/MyForm';

const LoginPage = (props) => {
    const submitEventHandler = (e)=>{
        e.preventDefault();
        props.history.push('/account');
    }
    return (
        <React.Fragment>
            <Header/>
            <MyForm
                props = {props}
                onSubmit = {submitEventHandler}
            />
        </React.Fragment>
        
    );
};

export default LoginPage;
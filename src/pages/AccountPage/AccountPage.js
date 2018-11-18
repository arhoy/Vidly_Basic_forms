import React from 'react';
import Header from '../../components/Header/Header'
import Account from '../../components/Account/Account'

// nested routing see Account.js
const AccountPage = () => {
    return (
        <div>
            <Header/>
            <h1>Your Account</h1>
            <Account/>
        </div>
    );
};

export default AccountPage;
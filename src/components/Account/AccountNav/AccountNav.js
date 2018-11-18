import React from 'react';
import {Link} from 'react-router-dom';
const AccountNav = ({accountDetails}) => {
    return (
        <div>
                <ul className="navbar-nav">
                {accountDetails.map(a=>(
                    <li key = {a.displayValue}>
                        <Link className="nav-link" to = {`/account/${a.value}`}>{a.displayValue}<span className="sr-only">(current)</span></Link>
                    </li>
                ))}
                </ul>
        </div>
    );
};

export default AccountNav;
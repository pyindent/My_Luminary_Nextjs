import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from 'react-modal';

import ALink from '~/components/features/custom-link';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: "flex"
    }
};

let index = 0;

Modal.setAppElement( "#__next" );

function LoginModal() {

    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0();

    const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: 'http://localhost:3000',
        }
    });

    useEffect(()=>{
        console.log(user);
    }, [isAuthenticated])
    return (
        <>
        {
            !isAuthenticated ? (
                <>
                    <a className="login-link d-lg-show" href="#" onClick={ loginWithRedirect }>
                        <i className="d-icon-user"></i>Sign in
                        <span className="delimiter">/</span>
                        Register
                    </a>
                </>
            ) : (
                <>
                    <a className="login-link d-lg-show" href="#" onClick={ logoutWithRedirect }>
                        <i className="d-icon-user"></i>Logout
                    </a>
                </>
            )
        }

        </>
    )
}

export default ( LoginModal );
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from 'react-modal';

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
          returnTo: process.env.NEXT_PUBLIC_URI,
        }
    });

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
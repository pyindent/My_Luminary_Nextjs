import { useState, useEffect } from "react";
import Modal from "react-modal";
import Cookie from "js-cookie";

const modalStyles = {
    content: {
        position: "relative"
    },
    overlay: {
        background: 'rgba(0,0,0,.4)',
        overflowX: 'hidden',
        overflowY: 'auto',
        display: 'flex'
    }
};

Modal.setAppElement( "#__next" );

export default function AgeVerificationModal() {
    const [ modalState, setModalState ] = useState( false );
    const [ noMore, setNoMore ] = useState( false );

    useEffect( () => {
        let timer;
        Cookie.get( "hideVerification" ) || ( timer = setTimeout( () => {
            setModalState( true );
        }, 5000 ) );

        return () => {
            timer && clearTimeout( timer );
        };
    }, [] );

    function closeModal() {
        document.querySelector( ".ReactModal__Overlay.ageverification-modal-overlay" ).classList.add( 'removed' );
        document.querySelector( ".ageverification-popup.ReactModal__Content" ).classList.remove( "ReactModal__Content--after-open" );

        setTimeout( () => {
            setModalState( false );

            noMore && Cookie.set( "hideVerification", 'true', { expires: 7, path: window.location.pathname } );
        }, 250 );
    }

    function handleChange( event ) {
        setNoMore( event.target.checked );
    }

    return (
        <Modal
            isOpen={ modalState }
            style={ modalStyles }
            onRequestClose={ closeModal }
            shouldReturnFocusAfterClose={ false }
            overlayClassName="ageverification-modal-overlay"
            className="ageverification-popup bg-img"
        >
            <div className="ageverification-popup" id="ageverification-popup" style={ { backgroundImage: "url(images/ageverification-popup.jpg)" } }>
                <div className="ageverification-content">
                    <h2 className="font-weight-semi-bold">Welcome to <span>LUMINARY</span></h2>
                    <h4 className="text-uppercase text-dark">Please verify your age to enter.</h4>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-round verify-age">
                        <button className="btn btn-primary" type="submit">I am 21 or Older</button>
                    </form>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-round verify-age">
                        <button className="btn btn-dark" type="submit">I am Under 21</button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
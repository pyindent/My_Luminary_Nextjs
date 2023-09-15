import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';
import Card from '~/components/features/accordion/card';

import { mainMenu } from '~/utils/data/menu';

function MobileMenu( props ) {
    const [ search, setSearch ] = useState( "" );
    const [ timer, setTimer ] = useState( null );
    const router = useRouter();

    useEffect( () => {
        window.addEventListener( 'resize', hideMobileMenuHandler );
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );

        return () => {
            window.removeEventListener( 'resize', hideMobileMenuHandler );
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        }
    }, [] )

    useEffect( () => {
        setSearch( "" );
    }, [ router.query.slug ] )

    const hideMobileMenuHandler = () => {
        if ( window.innerWidth > 991 ) {
            document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
        }
    }

    const hideMobileMenu = () => {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange( e ) {
        setSearch( e.target.value );
    }

    function onBodyClick( e ) {
        if ( e.target.closest( '.header-search' ) ) return e.target.closest( '.header-search' ).classList.contains( 'show-results' ) || e.target.closest( '.header-search' ).classList.add( 'show-results' );

        document.querySelector( '.header-search.show' ) && document.querySelector( '.header-search.show' ).classList.remove( 'show' );
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }

    function onSubmitSearchForm( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop',
            query: {
                search: search
            }
        } );
    }

    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-overlay" onClick={ hideMobileMenu }>
            </div>

            <ALink className="mobile-menu-close" href="#" onClick={ hideMobileMenu }><i className="d-icon-times"></i></ALink>

            <div className="mobile-menu-container scrollable">
                <form action="#" className="input-wrapper" onSubmit={ onSubmitSearchForm }>
                    <input type="text" className="form-control" name="search" autoComplete="off" value={ search } onChange={ onSearchChange }
                        placeholder="Search your keyword..." required />
                    <button className="btn btn-search" type="submit">
                        <i className="d-icon-search"></i>
                    </button>
                </form>

                <ul className="mobile-menu mmenu-anim">
                    <li>
                        <ALink href="/">Home</ALink>
                    </li>

                    <li>
                        <Card title="Categories" type="mobile" url="/shop">
                            <ul>
                                {
                                    mainMenu.other.map( ( item, index ) => (
                                        <li key={ `other-${ item.title }` }>
                                            <ALink href={ '/shop/?category=' + item.slug }>
                                                { item.title }
                                                { item.new ? <span className="tip tip-new">New</span> : "" }
                                            </ALink>
                                        </li>
                                    ) )
                                }
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <Card title="Blog" type="mobile" url="/blog/classic">
                            <ul>
                                {
                                    mainMenu.blog.map( ( item, index ) => (
                                        item.subPages ?
                                            <li key={ "blog" + item.title }>
                                                <Card title={ item.title } url={ '/' + item.url } type="mobile">
                                                    <ul>
                                                        {
                                                            item.subPages.map( ( item, index ) => (
                                                                <li key={ `blog-${ item.title }` }>
                                                                    <ALink href={ '/' + item.url }>
                                                                        { item.title }
                                                                    </ALink>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </Card>
                                            </li> :

                                            <li key={ "blog" + item.title } className={ item.subPages ? "submenu" : "" }>
                                                <ALink href={ '/' + item.url }>
                                                    { item.title }
                                                </ALink>
                                            </li>
                                    ) )
                                }
                            </ul>
                        </Card>
                    </li>

                    <li><ALink href={ `/pages/faqs` }>FAQ's</ALink></li>
                    <li><ALink href={ '/pages/about-us' }>About us</ALink></li>
                    <li><ALink href={ '/pages/wishlist' }>My Cart</ALink></li>
                    <li><ALink href={ '/pages/contact-us' }>Contact us</ALink></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo( MobileMenu );
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import { mainMenu } from '~/utils/data/menu';

function MainMenu() {
    const pathname = useRouter().pathname;

    return (
        <nav className="main-nav">
            <ul className="menu">
                <li id="menu-home" className={ pathname === '/' ? 'active' : '' }>
                    <ALink href='/'>HOME</ALink>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/shop' ) ? 'active' : '' }` }>
                    <ALink href='/shop'>Categories</ALink>

                    <div className="megamenu">
                        <div className="row">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                <h4 className="menu-title">Variations 1</h4>
                                <ul>
                                    {
                                        mainMenu.shop.variation1.map( ( item, index ) => (
                                            <li key={ `shop-${ item.title }` }>
                                                <ALink href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                </ALink>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                <h4 className="menu-title">Variations 2</h4>
                                <ul>
                                    {
                                        mainMenu.shop.variation2.map( ( item, index ) => (
                                            <li key={ `shop-${ item.title }` }>
                                                <ALink href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.new ? <span className="tip tip-new">New</span> : "" }
                                                </ALink>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner1 banner banner-fixed">
                                <figure>
                                    <img src="./images/menu/banner-1.jpg" alt="Menu banner" width="221" height="330" />
                                </figure>
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle font-weight-bold text-primary ls-m">Sale.
                            </h4>
                                    <h3 className="banner-title font-weight-bold"><span
                                        className="text-uppercase">Up to</span>70% Off</h3>
                                    <ALink href={ "/shop" } className="btn btn-link btn-underline">shop now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <ALink href="#">FAQ'S</ALink>
                </li>

                <li>
                    <ALink href={ `/blog/classic` }>ABOUT US</ALink>
                </li>

                <li>
                    <ALink href={ `/elements` }>MY CART</ALink>
                </li>

                <li>
                    <ALink href="/pages/about-us">CONTACT US</ALink>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;
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

                <li className={ `submenu  ${ pathname.includes( '/pages' ) ? 'active' : '' }` }>
                    <ALink href="#">CATEGORIES</ALink>

                    <ul>
                        {
                            mainMenu.other.map( ( item, index ) => (
                                <li key={ `other-${ item.title }` }>
                                    <ALink href={ '/' + item.url }>
                                        { item.title }
                                        { item.new ? <span className="tip tip-new">New</span> : "" }
                                    </ALink>
                                </li>
                            ) )
                        }
                    </ul>
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
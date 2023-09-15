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
                    <ALink href="/shop">CATEGORIES</ALink>

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
                </li>

                <li>
                    <ALink href="#">BLOG</ALink>
                </li>

                <li className={ pathname === '/pages/faqs' ? 'active' : '' }>
                    <ALink href={ `/pages/faqs` }>FAQ'S</ALink>
                </li>

                <li className={ pathname === '/pages/about-us' ? 'active' : '' }>
                    <ALink href={ `/pages/about-us` }>ABOUT US</ALink>
                </li>

                <li>
                    <ALink href={ `/elements` }>MY CART</ALink>
                </li>

                <li className={ pathname === '/pages/contact-us' ? 'active' : '' }>
                    <ALink href={ `/pages/contact-us` }>CONTACT US</ALink>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;
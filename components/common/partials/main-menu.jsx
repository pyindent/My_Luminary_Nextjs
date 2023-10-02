import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import withApollo from '~/server/apolloClient';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '~/server/queries';

function MainMenu() {
    const pathname = useRouter().pathname;
    const {data, loading} = useQuery(GET_CATEGORIES)
    console.log(data)
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
                            data && data.categories.map( ( item, index ) => (
                                <li key={ `other-${ item.title }` }>
                                    <ALink href={ '/shop/?category=' + item.slug }>
                                        { item.title }
                                        { item?.new ? <span className="tip tip-new">New</span> : "" }
                                    </ALink>
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li className={ pathname === '/blog' ? 'active' : '' }>
                    <ALink href={ `/blog/classic/` }>BLOG</ALink>
                </li>

                <li className={ pathname === '/pages/faqs' ? 'active' : '' }>
                    <ALink href={ `/pages/faqs` }>FAQ'S</ALink>
                </li>

                <li className={ pathname === '/pages/about-us' ? 'active' : '' }>
                    <ALink href={ `/pages/about-us` }>ABOUT US</ALink>
                </li>

                {/* <li>
                    <ALink href={ `/elements` }>MY CART</ALink>
                </li> */}

                <li className={ pathname === '/pages/contact-us' ? 'active' : '' }>
                    <ALink href={ `/pages/contact-us` }>CONTACT US</ALink>
                </li>
            </ul>
        </nav>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } ) ( MainMenu );
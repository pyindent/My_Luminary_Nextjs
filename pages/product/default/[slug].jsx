import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import withApollo from '~/server/apolloClient';
import { GET_PRODUCT, GET_PRODUCT_BY_SLUG } from '~/server/queries';

import OwlCarousel from '~/components/features/owl-carousel';

import MediaOne from '~/components/partials/product/media/media-one';
import DetailOne from '~/components/partials/product/detail/detail-one';
import DescOne from '~/components/partials/product/desc/desc-one';
import RelatedProducts from '~/components/partials/product/related-products';
import { bestSellingProducts } from '~/utils/data/tempdata';

import { mainSlider17 } from '~/utils/data/carousel';

function ProductDefault () {
    const slug = useRouter().query.slug;
    const { data, loading, error } = useQuery( GET_PRODUCT_BY_SLUG, { variables: { slug } } );
    const [ loaded, setLoadingState ] = useState( false );
    const product = data && data.productBySlug;
    // const related = data && data.product.related;

    // useEffect( () => {
    //     if ( product )
    //         imagesLoaded( 'main' ).on( 'done', function () {
    //             setLoadingState( true );
    //         } ).on( 'progress', function () {
    //             setLoadingState( false );
    //         } );
    // }, [ slug ] )

    return (
        <main className="main mt-6 single-product">
            <Helmet>
                <title>Riode React eCommerce Template | Product Default</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Default</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 pb-6 ${ !loading ? '' : 'd-none' }` } >
                        <div className="container vertical">
                            <div className="product product-single row mb-7">
                                <div className="col-md-6 sticky-sidebar-wrapper">
                                    <MediaOne product={ product } />
                                </div>

                                <div className="col-md-6">
                                    <DetailOne data={ product } />
                                </div>
                            </div>

                            {/* <DescOne product={ product } /> */}

                            {/* <RelatedProducts products={ bestSellingProducts } /> */}
                        </div>
                    </div> : ''
            }
            {
                !loading ? ''
                    :
                    <div className="skeleton-body container mb-10">
                        <div className="row mb-7">
                            <div className="col-md-6 pg-vertical">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
                                <div className="skel-pro-summary"></div>
                            </div>
                        </div>

                        <div className="skel-pro-tabs"></div>

                        <section className="pt-3 mt-4">
                            <h2 className="title justify-content-center">Related Products</h2>

                            <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                        </section>
                    </div>
            }
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductDefault );
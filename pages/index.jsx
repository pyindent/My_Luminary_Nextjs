import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";
// Import Apollo Server and Query
import withApollo from '../server/apolloClient';
import { GET_HOME_DATA, TEST_PRODUCTS } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import AgeVerificationModal from '~/components/features/modals/age-verification-modal';
import IntroSection from '~/components/partials/home/intro-section';
import ServiceBox from '~/components/partials/home/service-section';
import CategorySection from '~/components/partials/home/category-section';
import BestCollection from '~/components/partials/home/best-collection';
import DealSection from '~/components/partials/home/deal-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import CtaSection from '~/components/partials/home/cta-section';
import BrandSection from '~/components/partials/home/brand-section';
import BlogSection from '~/components/partials/home/blog-section';
import SmallCollection from '~/components/partials/product/small-collection';
import { bestSellingProducts, blogs } from '~/utils/data/tempdata'

function HomePage() {
    const { data, loading, error } = useQuery( TEST_PRODUCTS, { variables: { productsCount: 7 } } );
    // const {data, loading, error} = useQuery(TEST_PRODUCTS);
    const featured = data&&data?.products;
    const bestSelling = data&&data?.products;
    const latest = data&&data?.products;
    const onSale = data&&data?.products;
    const posts = blogs;

    return (
        <div className="main home">
            <Helmet>
                <title>My Luminary - Home</title>
            </Helmet>


            <h1 className="d-none">My Luminary - Home</h1>

            <div className="page-content">
                <div className="intro-section">
                    <IntroSection />

                    <ServiceBox />
                </div>

                <CategorySection />

                <BestCollection products={ bestSelling } loading={ loading } />

                <DealSection />

                <FeaturedCollection products={ featured } loading={ loading } />

                <CtaSection />

                <BlogSection posts={ posts } />

                <BrandSection />

                <SmallCollection featured={ featured } latest={ latest } bestSelling={ bestSelling } onSale={ onSale } loading={ loading } />
            </div>
            <AgeVerificationModal />
            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );
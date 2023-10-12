import React from 'react';
import Helmet from 'react-helmet';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import Accordion from '~/components/features/accordion/accordion';
import Card from '~/components/features/accordion/card';

import { fadeIn } from '~/utils/data/keyframes';
import FaqCollection from '~/components/partials/faq/faq-collection';

function ComingSoon() {
    return (
        <main className="main faq">
            <Helmet>
                <title>Riode React eCommerce Template | FAQs</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - FAQs</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </nav>

            <div className="page-header" style={ { backgroundImage: 'url(images/page-header/faq.jpg)' } }>
                <h3 className="page-subtitle lh-1">Frequently</h3>
                <h1 className="page-title font-weight-bold text-capitalize lh-1">Asked Questions</h1>
            </div>

            <div className="page-content mb-10 pb-8">
                <Reveal keyframes={ fadeIn } delay="100" duration="1000" triggerOnce>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mt-10">
                                    <h2 className="title pl-2 pr-2 ls-m text-left">Customer Management</h2>

                                    <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                        <FaqCollection filter={"customer_management"} />
                                    </Accordion>
                                </div>

                                <div className="col-md-6 mt-10">
                                    <h2 className="title pl-2 pr-2 ls-m">The Others</h2>
                                    <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                        <FaqCollection filter={"others"} />
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>
            </div>
        </main >
    )
}

export default React.memo( ComingSoon );
import React from 'react';
import Helmet from 'react-helmet';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import Accordion from '~/components/features/accordion/accordion';
import Card from '~/components/features/accordion/card';

import { fadeIn } from '~/utils/data/keyframes';

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
                                        <Card title="How do I place an order?" expanded={ true }>
                                            <p className="mb-0">Ordering is easy! Simply select a package, choose the type of gift you want, and pick your preferred delivery time.</p>
                                        </Card>

                                        <Card title="When will I receive my delivery?">
                                            <p className="mb-0">Rest assured, your delivery will arrive promptly. All orders are fulfilled within 1 hour of placing them, ensuring you receive your package within the specific hour you've chosen..</p>
                                        </Card>

                                        <Card title="What if I don't live in DC?">
                                            <p className="mb-0">Not a problem! We're flexible with our delivery locations. Even if you reside outside of DC, we can still arrange a convenient delivery for you within the city's boundaries.</p>
                                        </Card>
                                    </Accordion>
                                </div>

                                <div className="col-md-6 mt-10">
                                    <h2 className="title pl-2 pr-2 ls-m">The Others</h2>
                                    <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                        <Card title="What payments are accepted?" expanded={ true }>
                                            <p className="mb-0">We offer various payment options for your convenience. You can pay either in cash or through Clover, our trusted online payment processor.</p>
                                        </Card>

                                        <Card title="Initiative 71 and Cannabis Gifting">
                                            <p className="mb-0">Initiative 71 is DC's marijuana decriminalization law. Under this law, adults over 21 years old are legally allowed to possess up to 2 ounces of marijuana. While the sale of marijuana and THC products is still illegal, it is perfectly legal for one adult to gift up to an ounce to another adult. That's where Luminary comes in! We facilitate the gifting process within the legal boundaries of Initiative 71. For more information on Initiative 71 and its regulations, feel free to explore our dedicated section on our website.</p>
                                        </Card>

                                        <Card title="Additional Questions?">
                                            <p className="mb-0">If you have any further questions or need additional information, don't hesitate to reach out to us.</p>
                                        </Card>
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
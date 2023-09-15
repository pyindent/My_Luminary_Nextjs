import Helmet from 'react-helmet';
import CountUp from 'react-countup';
import React, { useEffect } from 'react'
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn, fadeInLeftShorter } from '~/utils/data/keyframes';
import { mainSlider16 } from '~/utils/data/carousel';

function AboutUs() {
    useEffect( () => {
        countToHandler();
        window.addEventListener( 'scroll', countToHandler, true );

        return () => {
            window.removeEventListener( 'scroll', countToHandler );
        }
    }, [] )

    function countToHandler() {
        let items = document.querySelectorAll( '.count-to' );

        for ( let i = 0; i < items.length; i++ ) {
            let item = items[ i ];
            if ( item.getBoundingClientRect().top > 0 && window.innerHeight - item.offsetHeight > item.getBoundingClientRect().top && !item.classList.contains( 'finished' ) ) {
                if ( item.querySelector( 'button' ) ) item.querySelector( 'button' ).click();
                item.classList.add( 'finished' );
            }
        }
    }

    return (
        <main className="main about-us">
            <Helmet>
                <title>Riode React eCommerce Template | About Us</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - About Us</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>About Us</li>
                    </ul>
                </div>
            </nav>
            <div className="page-header pl-4 pr-4"
                style={ { backgroundImage: `url( ./images/page-header/about-us.jpg )`, backgroundColor: "#3C63A4" } }>
                <h3 className="page-subtitle font-weight-bold">Welcome to LUMINARY</h3>
                <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">Our Services</h1>
                <p className="page-desc text-white mb-0">Step into Luminary, where we redefine the cannabis experience as an art gallery and gifting destination.</p>
            </div>

            <div className="page-content mt-10 pt-10">
                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="about-section pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 mb-10 mb-lg-4">
                                    <h5 className="section-subtitle lh-2 ls-md font-weight-normal">01. What We Do</h5>
                                    <h3 className="section-title lh-1 font-weight-bold">Provide perfect and practical services
                                    </h3>
                                    <p className="section-desc"> Immerse yourself in the world of graffiti and street art while browsing our diverse collection of digital prints crafted by local artists. But that's not all – we also offer a unique cannabis gifting service that sets us apart.</p>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="counter text-center text-dark">
                                                <CountUp start={ 0 } end={ 35 } duration={ 4 }>
                                                    { ( { countUpRef, start } ) => (
                                                        <div className="count-to">
                                                            <span ref={ countUpRef } />
                                                            <button onClick={ start } className="d-none">Start</button>
                                                        </div>
                                                    ) }
                                                </CountUp>
                                                <h5 className="count-title font-weight-bold text-body ls-md">Business Year</h5>
                                                <p className="text-grey mb-0">Step into Luminary, where we redefine the cannabis experience as an art gallery and gifting destination.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="counter text-center text-dark">
                                                <CountUp start={ 0 } end={ 50 } duration={ 4 }>
                                                    { ( { countUpRef, start } ) => (
                                                        <div className="count-to">
                                                            <span ref={ countUpRef } />
                                                            <button onClick={ start } className="d-none">Start</button>
                                                        </div>
                                                    ) }
                                                </CountUp>
                                                <h5 className="count-title font-weight-bold text-body ls-md">Products</h5>
                                                <p className="text-grey mb-0">Is weed legal in D.C.? Absolutely! Under Initiative 71, sharing and gifting cannabis is perfectly legal for adults.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="counter text-center text-dark">
                                                <CountUp start={ 0 } end={ 130 } duration={ 4 }>
                                                    { ( { countUpRef, start } ) => (
                                                        <div className="count-to">
                                                            <span ref={ countUpRef } />
                                                            <button onClick={ start } className="d-none">Start</button>
                                                        </div>
                                                    ) }
                                                </CountUp>
                                                <h5 className="count-title font-weight-bold text-body ls-md">Visitors</h5>
                                                <p className="text-grey mb-0">Visit Luminary, where art meets cannabis, and immerse yourself in a world of creativity, euphoria, and unique gifting options.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="customer-section pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-7 mb-4">
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/subpages/customer.jpg"
                                            alt="Happy Customer"
                                            width="580"
                                            height="507"
                                            effect="opacity"
                                            className="banner-radius"
                                            style={ { backgroundColor: "#BDD0DE" } }
                                        />
                                    </figure>
                                </div>
                                <div className="col-md-5 mb-4">
                                    <h5 className="section-subtitle lh-2 ls-md font-weight-normal">02. Happy Customer</h5>
                                    <h3 className="section-title lh-1 font-weight-bold">Provide fashionable and<br />qualifed products</h3>
                                    <p className="section-desc text-grey">
                                    Is weed legal in D.C.? Absolutely! Under Initiative 71, sharing and gifting cannabis is perfectly legal for adults. When you visit Luminary, you're not just purchasing cannabis directly; you're acquiring our unique branded merchandise. Our collection includes street art, music albums, virtual gifts, and more. As a bonus, we gift you the cannabis products as a complimentary offering, ensuring a memorable experience.
                                    </p>
                                    <ALink href="#" className="btn btn-dark btn-link btn-underline ls-m">Visit Our Store<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="store-section pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 order-md-first mb-4">
                                    <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1">03. Our Store</h5>
                                    <h3 className="section-title lh-1 font-weight-bold">Expect Restless<br />Amazing Support</h3>
                                    <p className="section-desc text-grey">
                                        At Luminary, we understand the need for convenience. That's why we offer weed delivery services to ensure a hassle-free experience. Simply reach out to us via phone or message, and we'll promptly assist you. Our delivery service requires a quick verification of your age by providing a picture of your ID. Rest assured, we'll swiftly deliver your chosen products to your doorstep, often on the same day or the following day.
                                    </p>
                                    <ALink href="#" className="btn btn-dark btn-link btn-underline ls-m">Get Our Store<i className="d-icon-arrow-right"></i></ALink>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/subpages/store.jpg"
                                            alt="Our Store"
                                            width="580"
                                            height="507"
                                            effect="opacity"
                                            className="banner-radius"
                                            style={ { backgroundColor: "#DEE6E8" } }
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="brand-section grey-section pt-10 pb-10">
                        <div className="container mt-8 mb-10">
                            <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">04. Our Clients</h5>
                            <h3 className="section-title lh-1 font-weight-bold text-center mb-5">Popular Brands</h3>

                            <OwlCarousel adClass="owl-theme" options={ mainSlider16 }>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/1.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/2.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/3.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/4.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/5.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/6.png" alt="Brand" width="180" height="100" />
                                </figure>
                            </OwlCarousel>
                        </div>
                    </section>
                </Reveal>

                {/* <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="team-section pt-8 mt-10 pb-10 mb-6">
                        <div className="container">
                            <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">05. Our Leaders</h5>
                            <h3 className="section-title lh-1 font-weight-bold text-center mb-5">Meet our team</h3>
                            <div className="row cols-sm-2 cols-md-4">
                                <Reveal keyframes={ fadeInLeftShorter } delay="20" duration="1000" triggerOnce>
                                    <div className="member">
                                        <figure className="banner-radius">
                                            <LazyLoadImage
                                                src="./images/subpages/team1.jpg"
                                                alt="Oteam member"
                                                width={ 280 }
                                                height={ 280 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#EEE" } }
                                            />

                                            <div className="overlay social-links">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </figure>

                                        <h4 className="member-name">Tomasz Treflerzan</h4>
                                        <h5 className="member-job">Ceo / Founder</h5>
                                    </div>
                                </Reveal>

                                <Reveal keyframes={ fadeInLeftShorter } delay="30" duration="1000" triggerOnce>
                                    <div className="member">
                                        <figure className="banner-radius">
                                            <LazyLoadImage
                                                src="./images/subpages/team2.jpg"
                                                alt="Oteam member"
                                                width={ 280 }
                                                height={ 280 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#EEE" } }
                                            />

                                            <div className="overlay social-links">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </figure>

                                        <h4 className="member-name">Dylan Chavez</h4>
                                        <h5 className="member-job">Support manager / founder</h5>
                                    </div>
                                </Reveal>

                                <Reveal keyframes={ fadeInLeftShorter } delay="40" duration="1000" triggerOnce>
                                    <div className="member">
                                        <figure className="banner-radius">
                                            <LazyLoadImage
                                                src="./images/subpages/team3.jpg"
                                                alt="Oteam member"
                                                width={ 280 }
                                                height={ 280 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#EEE" } }
                                            />

                                            <div className="overlay social-links">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </figure>

                                        <h4 className="member-name">Viktoriia Demianenko</h4>
                                        <h5 className="member-job">Designer</h5>
                                    </div>
                                </Reveal>

                                <Reveal keyframes={ fadeInLeftShorter } delay="50" duration="1000" triggerOnce>
                                    <div className="member">
                                        <figure className="banner-radius">
                                            <LazyLoadImage
                                                src="./images/subpages/team4.jpg"
                                                alt="Oteam member"
                                                width={ 280 }
                                                height={ 280 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#EEE" } }
                                            />

                                            <div className="overlay social-links">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </figure>

                                        <h4 className="member-name">Mikhail Hnatuk</h4>
                                        <h5 className="member-job">Support</h5>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </section>
                </Reveal> */}
            </div>
        </main>
    )

}

export default React.memo( AboutUs );
import { useQuery } from '@apollo/client';
import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import { storjImage } from '~/server/StorjService';
import { GET_CATEGORIES } from '~/server/queries';

import { fadeIn } from '~/utils/data/keyframes';

function CategorySection () {
    const {data, loading, error} = useQuery(GET_CATEGORIES)
    const categories = data && data?.categories.slice(0, 4);
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="pt-10 mt-7">
                <div className="container">
                    <h2 className="title title-center mb-5">Browse Our Top Categories</h2>

                    <div className="row">

                        {!loading && categories.map(item =>                         
                        <div className="col-xs-6 col-lg-3 mb-4">
                            <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                <ALink href={ { pathname: '/shop', query: { category: item.slug } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src={storjImage(item.picture.bucket, item.picture.key)}
                                            alt="Intro Slider"
                                            effect="opacity; transform"
                                            width={ 280 }
                                            height={ 280 }
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l">{item.title}</h4>
                                    </div>
                                </ALink>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( CategorySection );
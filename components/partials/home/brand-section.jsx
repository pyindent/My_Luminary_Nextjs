import { useQuery } from '@apollo/client';
import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import { storjImage } from '~/server/StorjService';
import { GET_BRANDS } from '~/server/queries';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    const {data, loading} = useQuery(GET_BRANDS)
    console.log(data)
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
            <section className="mt-2 pb-6 pt-10 pb-md-10">
                <h2 className="title d-none">Our Brand</h2>

                <div className="container">
                    <OwlCarousel adClass="owl-theme brand-carousel" options={ brandSlider }>
                        <figure>
                            <img src="./images/brands/1.png" alt="Brand" width="180" height="100" />
                        </figure>
                        {
                            data && data.brands.map(item => <figure key={item._id}><img src={storjImage(item.picture.bucket, item.picture.key)} alt="Brand" width="180" height="100" /></figure>)
                        }
                    </OwlCarousel>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );
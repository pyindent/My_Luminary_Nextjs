import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import { storjImage } from '~/server/StorjService';

import { toDecimal } from '~/utils';

function SmallProduct( props ) {
    const { product, adClass, isReviewCount = true } = props;

    return (
        <div className={ `product product-list-sm ${ adClass }` }>
            <figure className="product-media">
                <ALink href={ `/product/default/${ product.slug }` }>
                    <LazyLoadImage
                        alt="product"
                        src={ storjImage(product.pictures[ 0 ].bucket, product.pictures[ 0 ].key)}
                        threshold={ 500 }
                        effect="opacity"
                        width="300"
                        height="338"
                    />

                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ storjImage(product.variants[ 0 ].picture.bucket, product.variants[ 0 ].picture.key) }
                                threshold={ 500 }
                                width="300"
                                height="338"
                                effect="opacity"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>
            </figure>

            <div className="product-details">
                <h3 className="product-name">
                    <ALink href={ `/product/default/${ product.slug }` }>{ product.name }</ALink>
                </h3>

                <div className="product-price">
                    {
                        product.variants[0].price !== product.variants[0].sale_price ?
                            product.variants.length === 0 || ( product.variants.length > 0 && !product.variants[ 0 ].price ) ?
                                <>
                                    <ins className="new-price">${ toDecimal( product.variants[0].price) }</ins>
                                    <del className="old-price">${ toDecimal( product.variants[0].sale_price) }</del>
                                </>
                                :
                                < del className="new-price">${ toDecimal( product.variants[0].price ) } – ${ toDecimal( product.variants[0].sale_price ) }</del>
                            : <ins className="new-price">${ toDecimal( product.variants[0].price ) }</ins>
                    }
                </div>

                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={ { width: 20 * product.ratings ?? 5 + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ toDecimal( product.ratings ?? 5 ) }</span>
                    </div>

                    {
                        isReviewCount ?
                            <ALink href={ `/product/default/${ product.slug }` } className="rating-reviews">( { product.reviews } reviews )</ALink> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo( SmallProduct );
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';

import ToolBox from '~/components/partials/shop/toolbox';
import ProductTwo from '~/components/features/product/product-two';
import ProductEight from '~/components/features/product/product-eight';
import Pagination from '~/components/features/pagination';

import withApollo from '~/server/apolloClient';
import { GET_PRODUCTS } from '~/server/queries';

function ProductListOne( props ) {
    const { itemsPerRow = 3, type = "left", isToolbox = true } = props;
    const router = useRouter();
    const query = router.query;
    const [getProducts, { data, loading, error }] = useLazyQuery( GET_PRODUCTS );
    const products = data && data.products.products;
    const gridClasses = {
        3: "cols-2 cols-sm-3",
        4: "cols-2 cols-sm-3 cols-md-4",
        5: "cols-2 cols-sm-3 cols-md-4 cols-xl-5",
        6: "cols-2 cols-sm-3 cols-md-4 cols-xl-6",
        7: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-7",
        8: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-8"
    }
    const perPage = query.per_page ? parseInt( query.per_page ) : 6;
    const totalPage = products ? parseInt( data.products.totalProducts / perPage ) + ( data.products.totalProducts % perPage ? 1 : 0 ) : 1;
    const page = query.page ? query.page : 1;
    const gridType = query.type ? query.type : 'grid';

    useEffect(() => {
        console.log(query)
        getProducts({variables: {
            category: query.category,
            sortby: query.sortby,
            limit: perPage,
            skip: perPage * (page - 1)
        }})
    }, [query]) 

    return (
        <>
            {
                isToolbox ? <ToolBox type={ type } /> : ''
            }
            {
                loading ?
                    gridType === 'grid' ?
                        <div className={ `row product-wrapper ${ gridClasses[ itemsPerRow ] }` }>
                            {
                                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                )
                            }
                        </div> :
                        <div className="row product-wrapper skeleton-body cols-1">
                            {
                                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map( ( item ) =>
                                    <div className="skel-pro skel-pro-list mb-4" key={ 'list-skel-' + item }></div>
                                )
                            }
                        </div>
                    : ''
            }
            {
                gridType === 'grid' ?
                    <div className={ `row product-wrapper ${ gridClasses[ itemsPerRow ] }` }>
                        { products && products.map( item =>
                            <div className="product-wrap" key={ 'shop-' + item.slug }>
                                <ProductTwo product={ item } adClass="" />
                            </div>
                        ) }
                    </div>
                    :
                    <div className="product-lists product-wrapper">
                        { products && products.map( item =>
                            <ProductEight product={ item } key={ 'shop-list-' + item.slug } />
                        ) }
                    </div>
            }

            {
                products && products.length === 0 ?
                    <p className="ml-1">No products were found matching your selection.</p> : ''
            }

            {
                products && products.length > 0 ?
                    <div className="toolbox toolbox-pagination">
                        {
                            products && <p className="show-info">Showing <span>{ perPage * ( page - 1 ) + 1 } - { Math.min( perPage * page, data.products.totalProducts ) } of { data.products.totalProducts }</span>Products</p>
                        }

                        <Pagination totalPage={ totalPage } />
                    </div> : ''
            }
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductListOne );
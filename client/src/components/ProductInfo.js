import React from 'react';
import {withRouter} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ProductV from './ProductV'

const ProductInfo = (props) => {
    const {products} = useSelector(state => state.products)
    return(
        <div>
            {products.map(product=> (
            <div className="container">
                {props.match.params.id === product._id && (
                    <ProductV key={product._id} product={product}></ProductV>
                )}
            </div>
        ))
        }
        </div>
        
    );
    }
export default withRouter(ProductInfo);
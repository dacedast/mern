import {withRouter, Link} from 'react-router-dom';
import React from 'react';
import {useSelector} from 'react-redux';

const UserProducts = (props) => {
    // const {categories} = useSelector(state => state.categories);
    const {products} = useSelector(state => state.products)
    
    return(
        <div>
                <div className="container">
                    <h1>Выберите Урок</h1>

                    {products.map(product => (
                        <div className="row mt-3">
                        <div className="col">
                            <div className="list-group my-2">
                            {product.productCategory._id === props.match.params.id && (
                                    <Link to={"/user/dashboard/"+ product._id } className="btn list-group-item myButton bg-light">{product.productOrder}</Link>
                            )}
                                 
                            
                            </div>
                        </div>
                    </div>
                            ))}
            </div>
        </div>
    );
    }
export default withRouter(UserProducts);
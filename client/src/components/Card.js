import React from 'react';
import ReactPlayer from 'react-player';
import {useDispatch} from 'react-redux';
import {deleteProduct} from '../redux/actions/productActions';

const Card = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-center my-3 border">
            <div className="card h-100 border-color-dark mb-3" style={{width: '600px'}}>
                <div className="card-body text-center">
                    
                    <h5>{product.productOrder}</h5>
                    <hr/>
                    <h3>{product.productName}</h3>
                    <div className="wrapper">
                    <ReactPlayer 
                        className="player"
                        playing={false}
                        controls 
                        url={product.productVideo} 
                        width="100%"
                        height="100%"
                        />
                    </div>
                    <span className="border border-white">
                        <p>
                            <strong>
                            {product.productDesc}
                            </strong>
                        </p>
                        <h5 className="mb-3 ">Домашнее задание: </h5>
                        <p className="border border-primary border-4">
                            <strong>
                            {product.productHomework}
                            </strong>
                        </p>
                    </span>
                    <button className="btn btn-primary btn-sm mt-2" onClick={() => dispatch(deleteProduct(product._id))}>
                        <i className="far fa-trash-alt "></i>
                         Удалить
                    </button>
                </div> 
            </div>
        </div>
    );
    }
export default Card;
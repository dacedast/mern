import React from 'react';
import ReactPlayer from 'react-player';


const ProductV = ({product}) => {
    let video = product.productVideo + '?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent'
    return(
            <div className="d-flex justify-content-center my-3">
            <div className="card h-100 border-color-dark mb-3" style={{width: '900px'}}>
                <div className="card-body text-center">
                    <h1 className="mb-5">{product.productName}</h1>
                    <div className="wrapper">
                    <ReactPlayer 
                        className="player"
                        playing={false}
                        controls 
                        url={video}
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
                        <hr />
                        <h5 className="mb-3 display-5">Домашнее задание: </h5>
                        <p className="border border-primary border-4">
                            <strong>
                            {product.productHomework}
                            </strong>
                        </p>
                    </span>
                    <button className="btn btn-info btn-block text-decoration-none"><a href="http://wa.me/+996500384447/"  >Отправить домашнее задание</a></button>
                </div> 
            </div>
        </div>
    );
    }
export default ProductV;
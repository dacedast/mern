import React from 'react';
import Card from './Card';
//redux
import {useSelector} from 'react-redux';

const AdminBody = () => {
    const {categories} = useSelector(state => state.categories);
    const {products} = useSelector(state => state.products);
    return (
        <div className="container bg-light">
            <hr></hr>
        <div className="row">
        <div className="col">
            <h4 className="text-center my-3 py-4">Все категории <i className="fas fa-angle-down"></i></h4>
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            {categories.map(category => (
            <button key={category.category} className="accordion-button collapsed btn-outline-secondary">
                {category.category}
            </button>
            ))}
            </h2>
            <hr/>
        </div>
        <div className="container bg-light mt-5 py-5">
        <h4 className="text-center">Все уроки <i className="fas fa-angle-down"></i></h4>
            <div className="row">
                <div className="card-deck">
                    {products.map(product => (
                        <Card key={product._id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default AdminBody;

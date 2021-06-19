import React from 'react';
import {useSelector} from 'react-redux';
import ReactPlayer from 'react-player'

const AdminProductData = () => {
    const {categories} = useSelector(state => state.categories);
    const {products} = useSelector(state => state.products);
    return(
        <div>
            
        
        </div>
    );
    }
export default AdminProductData;
import React from 'react';
import {Link} from 'react-router-dom';

//redux
import {useSelector} from 'react-redux';

const UserBody = () => 
    {
    const {categories} = useSelector(state => state.categories);
    return(
        <div className="container">
            <h1>Выберите блок</h1>
            <div className="row mt-3">
                <div className="col">
                    <div className="list-group my-2">
                        {categories.map(category => (
                            <Link key={category.category} to={"/user/dashboard/" + category._id + "/" + category.category} className=" btn list-group-item myButton bg-light">{category.category}</Link>
                        ))}                 
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default UserBody;
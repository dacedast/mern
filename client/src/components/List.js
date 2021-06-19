import React from 'react';
//redux
import {useDispatch} from 'react-redux';
import {deleteUser} from '../redux/actions/userActions';

const List = ({user}) => {
    const dispatch = useDispatch();
    return(
    <div className="list-group">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"><strong>{user.username}</strong></h5>
        </div>
        <p className="mb-1 text-secondary">{user.email}</p>
        <button className="btn btn-primary btn-sm mt-2" onClick={() => dispatch(deleteUser(user._id))}>
            <i className="far fa-trash-alt "></i>
             Удалить
        </button>
        <hr />
    </div>
);
}
export default List;
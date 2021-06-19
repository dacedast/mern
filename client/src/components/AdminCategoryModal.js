import React, {useState, Fragment} from 'react';
import {showErrorMsg, showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import isEmpty from 'validator/lib/isEmpty';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {clearMessages} from '../redux/actions/messageActions';
import {createCategory} from '../redux/actions/categoryActions';


const AdminCategoryModal = () => {
    /**
     * REDUX GLOBAL STATE PROPERTIES
     */
    const {successMsg, errorMsg} = useSelector(state => state.messages);
    const {loading} = useSelector(state => state.loading);

    const dispatch = useDispatch();

    /**
     * COMPONENT STATE PROPERTIES
     */
    const [category, setCategory] = useState('');
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');

    const handleMessages = evt => {
      dispatch(clearMessages());
    };
    const handleCategoryChange = evt => {
      dispatch(clearMessages());
      setCategory(evt.target.value);
    };
    const handleCategorySubmit = evt => {
    evt.preventDefault();

    if(isEmpty(category)){
      setClientSideErrorMsg('Please enter a category');
    }else {
      const data = {category};

      dispatch(createCategory(data));
      setCategory('');
    }
    };
    return (
    <div id='addCategoryModal' className='modal' onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleCategorySubmit}>
          <div className='modal-header bg-info text-white'>
            <h5 className="modal-title">Добавить блок</h5>
            <button className="btn-close" data-bs-dismiss='modal'>
              <span><i className="far fa-times"></i></span>
            </button>
          </div>
          <div className='modal-body my-2'>
              {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
              {errorMsg && showErrorMsg(errorMsg)} 
              {successMsg && showSuccessMsg(successMsg)}
              
              { 
                loading ? (
                  showLoading()
                ) : (
                  <Fragment>
                  <label className="text-secondary">Блок</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                    
                    ></input>
                    </Fragment>
                )
              }
              
          </div>
          <div className='modal-footer'>
            <button data-bs-dismiss="modal" className="btn btn-secondary">Закрыть</button>
            <button type="submit" className="btn btn-info text-white">Подтвердить</button>
          </div>
          </form>
        </div>
      </div>
    </div>
)
}
export default AdminCategoryModal;
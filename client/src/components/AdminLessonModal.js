import React, {useState, Fragment} from 'react';
import isEmpty from 'validator/lib/isEmpty';
import {showErrorMsg, showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {clearMessages} from '../redux/actions/messageActions';
import {createProduct} from '../redux/actions/productActions';


const AdminLessonModal = () => {
  /**
   * REDUX GLOBAL
   */
  const {loading} = useSelector(state => state.loading)
  const {errorMsg, successMsg} = useSelector(state => state.messages)
  const {categories} = useSelector(state => state.categories)

  const dispatch = useDispatch();
  //state component
  const [clientSideError, setClientSideError] = useState('');
  const [productData, setProductData] = useState({
    productOrder: '',
    productName: '',
    productDesc: '',
    productVideo: '',
    productHomework: '',
    productCategory: '',
  });
  const {
    productOrder,
    productName,
    productDesc,
    productVideo,
    productHomework,
    productCategory,
  } = productData;

  const handleMessages = evt => {
    dispatch(clearMessages());
    setClientSideError('');
  };
  const handleProductChange = evt => {
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.value
    }) 
  };
  const handleProductSubmit = evt => {
    evt.preventDefault();

    if(isEmpty(productOrder) || isEmpty(productName) || isEmpty(productDesc) || isEmpty(productVideo) || isEmpty(productHomework)){
      setClientSideError('All fields are required')
    } else if(isEmpty(productCategory)){
      setClientSideError('Please select a category')
    } else {
      let formData = {
        productOrder,
        productName,
        productDesc,
        productVideo,
        productHomework,
        productCategory,}

        dispatch(createProduct(formData))
        setProductData({
            productOrder: '',
            productName: '',
            productDesc: '',
            productVideo: '',
            productHomework: '',
            productCategory: '',
          })
    }
  }
  return(
    <div id='addLessonModal' className='modal' onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleProductSubmit}>
          <div className='modal-header bg-warning text-white'>
            <h5 className="modal-title">Добавить урок</h5>
            <button className="btn-close" data-bs-dismiss='modal'>
              <span><i className="far fa-times"></i></span>
            </button>
          </div>
          <div className='modal-body my-2'>
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}
              
              { 
                loading ? (
                  showLoading()
                ) : (
                  <Fragment>
                    <div className="form-group mt-2"> 
                      <label className="text-secondary">Номер урока</label>
                      <input 
                        className="form-control" 
                        type="text"
                        name='productOrder'
                        value={productOrder}
                        onChange={handleProductChange}
                        ></input>
                    </div>
                    <div className="form-group mt-2"> 
                      <label className="text-secondary">Название</label>
                      <input 
                        className="form-control" 
                        type="text"
                        name='productName'
                        value={productName}
                        onChange={handleProductChange}
                        ></input>
                    </div>
                    <div className="form-group mt-2">
                      <label className="form-label">Описание</label>
                      <textarea 
                        className="form-control" 
                        rows="3"
                        name='productDesc'
                        value={productDesc}
                        onChange={handleProductChange}
                        ></textarea>
                    </div>
                    <div className="form-group mt-2"> 
                      <label className="text-secondary">Youtube URL</label>
                      <input 
                        className="form-control" 
                        type="text"
                        name='productVideo'
                        value={productVideo}
                        onChange={handleProductChange}
                         ></input>
                    </div>
                    <div className="form-group mt-2">
                      <label className="form-label">Домашнее задание</label>
                      <textarea 
                        className="form-control" 
                        rows="3"
                        name='productHomework'
                        value={productHomework}
                        onChange={handleProductChange}
                        ></textarea>
                    </div>
                    <div className="form-group col-md-6 mt-2">
                      <label className="text-secondary">Блок</label><br/>
                      <select className="custom-select my-1 mr-sm-2" name='productCategory' onChange={handleProductChange}>
                        <option value=''>Выберите одну...</option>
                        {categories && categories.map(c =>(
                          <option key={c._id} value={c._id}>
                           {c.category} 
                          </option>
                        ))}
                      </select>
                    </div>
                  </Fragment>
                )
              }
              
          </div>
          <div className='modal-footer'>
            <button data-bs-dismiss="modal" className="btn btn-secondary">Закрыть</button>
            <button type="submit" className="btn btn-warning text-white">Подтвердить</button>
          </div>
          </form>
        </div>
      </div>
    </div>
)
}
export default AdminLessonModal;
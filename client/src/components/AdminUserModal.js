import React from 'react';
//redux
import {useSelector} from 'react-redux';
import List from './List';

const AdminUserModal = () => {
    const {users} = useSelector(state => state.users)
    return (
    <div id='showUsersModal' className='modal'>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          
          <div className='modal-header bg-dark text-white'>
            <h5 className="modal-title">Пользователи</h5>
            <button className="btn-close" data-bs-dismiss='modal'>
              <span><i className="far fa-times"></i></span>
            </button>
          </div>
          <div className='modal-body my-2'>
            {users.map(user => (
                <List key={user._id} user={user}/>
            ))}
          </div>
          <div className='modal-footer'>
            <button data-bs-dismiss="modal" className="btn btn-dark">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
)
}
export default AdminUserModal;
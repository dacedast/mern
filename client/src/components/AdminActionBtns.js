import React from 'react';

const AdminActionBtns = () => (
    <div className="colors my-2">
        <div className="container">
            <div className="row pb-3">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button 
                        className='btn btn-outline-info btn-block' 
                        data-bs-toggle='modal' 
                        data-bs-target='#addCategoryModal'
                    >
                        <i className="fas fa-file-alt"> Добавить блок</i>
                    </button>
                    <button 
                      className='btn btn-outline-warning btn-block' 
                      data-bs-toggle='modal' 
                      data-bs-target='#addLessonModal'
                      
                      >
                        <i className="fas fa-plus"> Добавить урок</i>
                    </button>
                    <button 
                      className='btn btn-outline-success btn-block'>
                        <i className="fas fa-check-circle"> Домашнее задание</i>
                    </button>
                    <button 
                      className='btn btn-outline-dark btn-block'
                      data-bs-toggle='modal' 
                      data-bs-target='#showUsersModal'
                      >
                        <i className="fa fa-address-card"> Пользователи</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
);
export default AdminActionBtns;
import React, {useEffect} from 'react';
//components
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminLessonModal from './AdminLessonModal';
import AdminBody from './AdminBody';
import AdminUserModal from './AdminUserModal';
//redux
import {useDispatch} from 'react-redux';
import {getCategories} from '../redux/actions/categoryActions';
import {getProducts} from '../redux/actions/productActions';
import {getUsers} from '../redux/actions/userActions';

const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])
  return(
    <section>
      <AdminHeader />
      <AdminActionBtns />
      <AdminCategoryModal />
      <AdminLessonModal />
      <AdminBody />
      <AdminUserModal />
    </section>
   )
 }

export default AdminDashboard;
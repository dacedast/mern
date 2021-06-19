import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import NotFound from './NotFound';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import Footer from './Footer';
import UserProducts from './UserProducts';
import ProductInfo from './ProductInfo';
// import AdminCategories from './AdminCategories';
// import AdminProductData from './AdminProductData';
//redux

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/signin' component={Signin}/>
          <UserRoute exact path='/user/dashboard' component={UserDashboard}/>
          <UserRoute path='/user/dashboard/:id/:name' component={UserProducts}/>
          <UserRoute path='/user/dashboard/:id' component={ProductInfo}/>
          <AdminRoute exact path='/admin/dashboard' component={AdminDashboard}/>
          {/* <AdminRoute exact path='/admin/categories' component={AdminCategories}/> */}
          {/* <AdminRoute exact path='/admin/productdata/' component={AdminProductData}/> */}
          <Route component={NotFound}/>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )};

export default App;

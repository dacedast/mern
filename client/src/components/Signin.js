import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {showErrorMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import {signin} from '../api/auth';
import {setAuthentication, isAuthenticated} from '../helpers/auth';



const Signin = () => {
  let history = useHistory();
  useEffect(() => {
    if(isAuthenticated() && isAuthenticated().role === 1) {
        history.push('/admin/dashboard');
    } else if(isAuthenticated() && isAuthenticated().role === 0){
        history.push('/user/dashboard');
    }
  }, [history])
  const[formData, setFormData] = useState({
        email: '',
        password: '',
        errorMsg: false,
        loading: false
    });
  const {
      email, 
      password, 
      errorMsg, 
      loading
  } = formData;

  const handleSubmit = evt => {
    evt.preventDefault();
    if (isEmpty(email)||isEmpty(password)){
      setFormData({
        ...formData, errorMsg: 'All fields are required'
    })
    } else if (!isEmail(email)) {
        setFormData({
          ...formData, errorMsg: 'Invalid email'
        })
    } else {
        const {email, password} = formData;
        const data = {email, password};
            
        setFormData({...formData, loading: true});
        signin(data)
          .then(response => {
            setAuthentication(response.data.token, response.data.user);
            if(isAuthenticated() && isAuthenticated().role === 1) {
                history.push('/admin/dashboard');
            } else {
                console.log('Redirecting to UserDashboard');
                history.push('/user/dashboard');
            }
          })
          .catch(err => {
            console.log('signin api finction error' ,err);
            setFormData({
                ...formData,
                loading: false,
                errorMsg: err.response.data.errorMessage,
            })
          })
  };
  }
  const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value,
            errorMsg: '',
        })
  }
  
  const showSigninForm = () => (
        <div className="container mt-1 mb-5">
        <form onSubmit={handleSubmit} noValidate>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-3" > 
                        <span className="circle">
                            <i className="fa fa-check"></i>
                        </span>
                        <h5>Вход</h5>
                        <div className="form-input"> 
                            <i className="fa fa-envelope"></i> 
                            <input 
                                name='email'
                                value={email}
                                type="email" 
                                className="form-control" 
                                placeholder="Email"
                                onChange={handleChange}
                                /> 
                        </div>
                        <div className="form-input"> 
                            <i className="fa fa-lock"></i> 
                            <input 
                                name="password"
                                value={password}
                                type="password" 
                                className="form-control" 
                                placeholder="Пароль"
                                onChange={handleChange}
                            /> 
                        </div>
                        <button className="btn btn-info mt-4 signup">Вход</button>
                        <div className="text-center mt-4"> 
                            <span>Еще нет аккаунта? </span> 
                                <Link to="/signup" className="text-decoration-none">Регистрируйся здесь</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );

  return(
    <div className="signup-container text-center">
            {errorMsg && showErrorMsg(errorMsg)}
            {loading && showLoading()}
            {showSigninForm()}
        </div>
   )

}

export default Signin;
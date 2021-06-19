import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import {showErrorMsg, showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import {signup} from '../api/auth';
import {isAuthenticated} from '../helpers/auth';


const Signup = () => {
  let history = useHistory();
  useEffect(() => {
    if(isAuthenticated() && isAuthenticated().role === 1) {
        history.push('/admin/dashboard');
    } else if(isAuthenticated() && isAuthenticated().role === 0){
        history.push('/user/dashboard');
    }
  }, [history])
  const[formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false
    });
    const {
        username, 
        email, 
        password, 
        password2, 
        successMsg, 
        errorMsg, 
        loading
    } = formData;
    const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value,
            successMsg: '',
            errorMsg: '',
        })
    };
  const handleSubmit = evt => {
    evt.preventDefault();
    //client-side validation
      if (isEmpty(username)||isEmpty(email)||isEmpty(password)||isEmpty(password2)){
          setFormData({
              ...formData, errorMsg: 'All fields are required'
          })
      } else if (!isEmail(email)) {
          setFormData({
              ...formData, errorMsg: 'Invalid email'
          })
      } else if (!equals(password, password2)) {
          setFormData({
              ...formData, errorMsg: 'Passwords do not match'
          })
      } else {
            const {username, email, password} = formData;
            const data = {username, email, password};
          
            setFormData({...formData, loading: true});

            signup(data)
                .then(response => {
                    console.log('Axios signup success: ', response);
                    setFormData({
                            username: '',
                            email: '',
                            password: '',
                            password2: '',
                            loading: false,
                            successMsg: response.data.successMessage,

                        })
                })
                .catch(err => {
                    console.log('Axios signup error', err);
                    setFormData({
                            ...formData, loading: false, 
                            errorMsg: err.response.data.errorMessage
                    })
                })
         }     
  };
  const showSignupForm = () => (
    <div className="container mt-1 mb-5">
        <form onSubmit={handleSubmit} noValidate>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-3" > 
                        <span className="circle">
                            <i className="fa fa-check"></i>
                        </span>
                        <h5 className="mt-3">Регистрация</h5>
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
                            <i className="fa fa-user"></i> 
                            <input 
                                name='username'
                                value={username}
                                type="text" 
                                className="form-control" 
                                placeholder="Никнейм"
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
                        <div className="form-input"> 
                            <i className="fa fa-lock"></i> 
                            <input 
                                name="password2"
                                value={password2}
                                type="password" 
                                className="form-control" 
                                placeholder="Подтвердить пароль"
                                onChange={handleChange}
                            /> 
                        </div>
                        <button className="btn btn-info mt-4 signup">Регистрация</button>
                        <div className="text-center mt-4"> 
                            <span>Уже есть аккаунт?</span> 
                                <Link to="/signin" className="text-decoration-none"> Вход</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
  )
  return(
    <div className="signup-container text-center">
      {successMsg && showSuccessMsg(successMsg)}
      {errorMsg && showErrorMsg(errorMsg)}
      {loading && showLoading()}
      {showSignupForm()}
    </div>
   )

 }

export default Signup;
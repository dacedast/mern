import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';
import {logout} from '../helpers/auth';

const Header = ({ history }) => {
    const handleLogout = evt => {
        logout(()=> {
            history.push('/signin');
        })
    }
    //views
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light colors">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">ИнфоШкола</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                            <Link to="/" className="nav-link cool-link" aria-current="page" ><i className="fas fa-home"></i> Главная</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/signup" className="nav-link cool-link" aria-current="page" ><i className="fas fa-edit"></i> Регистрация</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/signin" className="nav-link cool-link" ><i className="fas fa-sign-in-alt"></i> Вход</Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && isAuthenticated().role === 0 && (
                        <Fragment>
                            <li className="nav-item">
                            <Link to="/user/dashboard" className="nav-link cool-link" aria-current="page" ><i className="fas fa-chalkboard"></i> Основа</Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && isAuthenticated().role === 1 && (
                        <Fragment>
                            <li className="nav-item">
                            <Link to="/admin/dashboard" className="nav-link cool-link" aria-current="page" ><i className="fas fa-chalkboard"></i> Панель управления</Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                            <button className="btn btn-link text-secondary text-decoration-none ps-0" aria-current="page" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Выход</button>
                            </li>
                        </Fragment>
                    )}
                </ul>
                </div>
            </div>
            </nav>
    )
    return (
        <header id='header'>
            {showNavigation()}
        </header>
    );
}

export default withRouter(Header);
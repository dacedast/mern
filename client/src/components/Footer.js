import React from 'react';

const Footer = () => {
    const showFooter = () => (
        <footer className="footer-bg text-white pt-5 pb-4 mt-5">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">ИнфоШкола</h5>
                        <p>Вебсайт, созданный для того чтобы обучать людей полезным навыкам</p>
                    </div>  
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Контакты</h5>
                        <p>
                            <a className="text-decoration-none text-white" href="#">Бишкек, Кыргызстан</a>
                        </p>
                        <p>
                            <a className="text-decoration-none text-white" href="http://wa.me/+996501384447/"><i className="fab fa-whatsapp"></i> +996 501 384 447</a>
                        </p>
                        <p>
                            <a className="text-decoration-none text-white" href="https://www.instagram.com/nazik_coach/"><i className="fab fa-instagram"></i> nazik_coach</a>
                        </p>
                        <p>
                            <a className="text-decoration-none text-white" href="https://www.facebook.com/profile.php?id=100041772392314"><i className="fab fa-facebook"></i>Инфошкола</a>
                        </p>
                        <p>
                            <a className="text-decoration-none text-white" href="https://www.gmail.com/">karmyshakovanazira@gmail.com</a>
                        </p>
                    </div>
                    <hr className="mb-4" />
                    <div className="row align-items-center">
                        <div>
                            <p> Copyright ©2021 All rights reserved by: 
                                <strong className="text-warning"> Dastan D.</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="justify-content-center text-center">
                            <div className="iconSize">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm text-white" href="https://www.gmail.com/"><i className="fab fa-google-plus"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm text-white" href="https://www.instagram.com/d.hivervent/"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm text-white btn-lg" href="https://api.whatsapp.com/send?phone=420732268737 "><i className="fab fa-whatsapp"></i></a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
    return(
        <div>
            {showFooter()}

        </div>
        )
    }
export default Footer;
import React from 'react'
import {Link} from 'react-router-dom';


const Home = () => {
  const showBody = () => (
    <>
     <div className="page-header text-white section"> 
       <div className="container pt-3 pb-3">
        <div className="justify-content-center align-items-center">
          <div className="my-3">
            <div className="wavy">
            <span style={{"--i":1}}>Г</span>
            <span style={{"--i":2}}>o</span>
            <span style={{"--i":3}}>т</span>
            <span style={{"--i":4}}>о</span>
            <span style={{"--i":5}}>в</span>
            <span style={{"--i":6}}>ы</span>
            <span style={{"--i":7}}>?</span>       
            </div>
            <p>Чтобы пройти регистрацию, нажмите кнопку ниже</p>
            <Link to="/signin" className="btn btn-outline-light btn-lg" type="button">Хочу учиться!</Link>
            <div className="mt-5">
              <div className="wavy">
              <span style={{"--i":1}}>Б</span>
              <span style={{"--i":2}}>o</span>
              <span style={{"--i":3}}>л</span>
              <span style={{"--i":4}}>ь</span>
              <span style={{"--i":5}}>ш</span>
              <span style={{"--i":6}}>е</span>
              <span style={{"--i":7}}>!</span>
              </div>
              <a href="http://infoshkola.tilda.ws/" className="btn btn-outline-light btn-lg" type="button">Узнать больше...</a>
            </div>
          </div>
        </div>
      </div> 
     </div> 
    
    </>
  )
  return(
    <div>{showBody()}</div>
   )

 }

export default Home;
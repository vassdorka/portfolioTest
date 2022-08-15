import React from 'react'
import bcVideo from '../media/production ID_4365142.mp4' 
import Girl from '../media/dillon-wanner-7zBNGw1aRmE-unsplash.jpg'
import '../App.css'

const Home = ( {personData} ) => {
  
  return (
    <div className="home">
      <div className="bc">
          <video id="video1" autoPlay loop muted src={bcVideo} />
      </div>
      <div className="whiteBc">
        <div className="homeText">
          <h1>Hi!</h1>
          <div className="homeText-column">
            <div className="homeText-row">
              <h2>I am</h2>
              <h2 className="homeText-name">{personData.name},</h2>
            </div>
            <h2>a {personData.profession}.</h2>
          </div>
        </div>
        <div className="homeImage">
          <img src={Girl} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import bcVideo from '../media/production ID_4365142.mp4' 
import '../App.css'

const About = () => {
  return (
    <div className="about">
        <div className="whiteCointainer1">
        <video id="video2" autoPlay loop muted src={bcVideo} />
        <div className="aboutText">
          <h1 className='aboutText-h1'>About me</h1>
          <div className='aboutText-p-container'>
          <p className='aboutText-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend iaculis feugiat. Proi lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend iaculis feugiat. Proin pharetra massa turpis, et sodales lacus tempus a. Ut vitae massa a ante fermentum laoreet. Aenean condimentum purus in magna tincidunt sodales. Donec ac viverra elit. Nullam pulvinar mi eu erat gravida porta. Curabitur scelerisque nec urna vitae auctor.<br></br><br></br>
              Maecenas placerat, risus vitae placerat lobortis. MASSA TURPIS, ET SODALES LACUS TEMPUS A. UT VITAE MASSA A ANTE FERMENTUM LAOREET. AENEAN CONDIMENTUM PURUS IN MAGNA TINCIDUNT SODALES. DONEC AC VIVERRA ELIT. NULLAM PULVINAR MI EU ERAT GRAVIDA PORTA nibh neque facilisis orci, eu consectetur ligula risus vel enim. Donec porttitor convallis dui, ac lobortis metus laoreet ac. Donec sit amet odio vitae est bibendum venenatis sit amet blandit sem. In blandit purus ac blandit maximus. Vestibulum et commodo lorem.</p>
          </div>

        </div>
        </div>
    </div>
  )
}

export default About
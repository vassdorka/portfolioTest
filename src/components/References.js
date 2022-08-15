import React from 'react'
import bcVideo from '../media/production ID_4365142.mp4' 
import { BsArrowUp} from 'react-icons/bs'
import '../App.css'
import img1 from '../media/name1.jpg'
import img2 from '../media/name2.jpg'
import img3 from '../media/name3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

const References = () => {
  const references = [
    {
      image: img1,
      name: 'Camille De Wosch',
      company: 'Imaginary Comapny 1',
      description: '"Duis gravida orci a neque sagittis, quis ultricies quam scelerisque. Aliquam efficitur nibh augue, nec consequat est dignissim non. Fusce ultrices ut augue id laoreet. Vestibulum id diam eget diam laoreet faucibus. Ut pulvinar elementum quam, vitae convallis mi tincidunt eu. Cras tristique nisl ut neque luctus, in ultrices nunc commodo. Vivamus id vulputate eros. Maecenas tincidunt bibendum iaculis. Vivamus lacus ante, placerat quis pulvinar ac, iaculis sed augue."'
    },
    {
      image: img2,
      name: 'Alex Smith',
      company: 'Imaginary Company 2',
      description: '"Proin egestas feugiat nulla, at faucibus mi fringilla cursus. Integer sed arcu ex. Vestibulum dignissim justo ut lacus suscipit vestibulum. Vestibulum in diam non est pretium malesuada. Nam cursus lacinia ornare. Nunc rhoncus fringilla ex ut vehicula. Maecenas sodales enim at ipsum mollis, id aliquet ante lobortis."'
    },
    {
      image: img3,
      name: 'Aaron Wlater',
      company: 'Imaginary Company 3',
      description: '"Nullam suscipit sapien tortor, facilisis facilisis lorem molestie sit amet. Aliquam mollis ipsum nec blandit vehicula. Phasellus tincidunt ex ac dolor consectetur, sed porta mauris rhoncus. Phasellus tristique dignissim lorem eget tincidunt. Nulla convallis est et mi rhoncus cursus. Morbi non rutrum quam, in dignissim mi."'
    }
  ]
  return (
    <div className="ref">
        <div className="whiteCointainer2">
        <video id="video3" autoPlay loop muted src={bcVideo} />
        <Swiper direction={"vertical"} className="projectContainer">
        {
            references.map(({image, name, company, description}, index) => {
              return (
                <SwiperSlide key={index} className='projectDiv'>
                  <div className='projectImageDiv'>
                    <img src={image} alt="" id='projectImg'/>
                  </div>
                  <div className='projectTextDiv'>
                    <h2 className='projectText-name'>{name}</h2>
                    <h3 className='projectText-comp'>{company}</h3>
                    <p className='projectText-desc'>{description}</p>
                  </div>
                  <div className='dragArrow'>
                  <BsArrowUp size="40" id="arrowUp" />
                  <p className='dragText'>drag me</p>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        </div>
    </div>
  )
}

export default References
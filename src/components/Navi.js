import React, {useState} from 'react'
import '../App.css'

const Navi = () => {
const [navi, setNavi] = useState(false);

const naviDisappear = () => {
    if(window.scrollY >= 715) {
        setNavi(true)
    }else {
        setNavi(false)
    }
}

window.addEventListener('scroll', naviDisappear)


  return (
    <div className={navi ? 'naviActive' : 'navi'}>
        <ul className="navi-ul">
            <li className="navi-li">About</li>
            <li className="navi-li">Gallery</li>
            <li className="navi-li">Carrer</li>
            <li className="navi-li">Reservation</li>
            <li className="navi-li">Contact</li>
            <li className="login">Log In</li>
        </ul>
    </div>
  )
}

export default Navi
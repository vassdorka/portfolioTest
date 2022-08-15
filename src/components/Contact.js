import React, { useRef } from 'react'
import bcVideo from '../media/production ID_4365142.mp4' 
import { BsArrowRight } from 'react-icons/bs'
import '../App.css'
import emailjs from 'emailjs-com'

const Contact = ({personData}) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_aymaya7', 'template_0ghaqwn', form.current, 'Kk2IY-yy08dAljOYU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };


  return (
    <div className="contact">

    <div className="whiteCointainer3">
        <div className='contactForm'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='inputs'>
                <label>email
                </label>
                <input id='email' name='email' type='email' required/>
                <label>message</label>
                <textarea id='message' name='message' rows="10" required/>
                <div className="contactText">
                    {
                        personData.socialContacts.map((contact) => <p className='contactText-contacts-p'>{contact.platform}</p>)
                    }
                </div>
                </div>
                <button id='submit' type="submit"><BsArrowRight size="40" id="icon"/></button>
            </form>
        </div>
        <div className='contactMeText'>
        <h1 className='contactText-h1'>Contact me</h1>
        </div>
        <video id="video4" autoPlay loop muted src={bcVideo} />

    </div>
</div>
  )
}

export default Contact
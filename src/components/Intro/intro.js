import React from 'react'
import './intro.css'
import MUSKA from '../../assets/MUSKA.png'
import hire from '../../assets/hireicon.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Mustafa</span><br />Flutter Developer</span>
            <p className="introPara">I am a student at Hasan Kalyoncu Software Engineering Depertmant and I am always learning new things.</p>
            <Link><button className="btn"><img className='btnImg' src={hire} alt="hireicon" />Hire Me</button></Link>
        </div>
        
        <img src={MUSKA} alt="" className="MUSKA" />
    </section>
  )
}

export default Intro;
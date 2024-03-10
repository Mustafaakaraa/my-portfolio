import React from 'react'
import './skills.css';
import UIDesign from '../../assets/uxdesign.png'
import Certification from '../../assets/certification.png'
import Project from '../../assets/project.png'
import School from '../../assets/school.png'
import Work from '../../assets/work.png'

const Skills = () => {
  return (
    <section id='skills'>
       <span className="title">What I Do</span>
       <br />
       <span className="skilldesc">I am a Software Engineering student at Gaziantep Hasan Kalyoncu University. My software journey began in 2020 when I led the software team for an electric vehicle at TeknoFest. While leading Google Developer Student Clubs, I discovered Flutter and decided to focus on this technology. I joined Flutter Students Club and participated in various projects. Meanwhile, I worked as a 1st Lead at Altogic, further enhancing my Flutter skills. In 2023, I founded Google Developer Group Gaziantep to bring together software developers in Gaziantep. My goal is to use my skills to develop software projects that benefit society.</span>
       <div className="skillbars">
        <div className="skillbar">
            <img src={Work} alt="workphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Flutter Developer - Ulusal Faktoring</h2>
                <p>this is a demo text, you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={School} alt="schollphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Software Engineering - Hasan Kalyoncu University</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={Project} alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Çek Para</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={Project} alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Ulusal Web</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={UIDesign} alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI Designer</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={Certification } alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>OUA Graduation Certificate</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={Certification } alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Google Project Management Certificate</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={Certification } alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>OUA Appjam Certificate</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={Certification } alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Adobe XD - UI/UX Design</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={Certification } alt="uıdesignphoto" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Version Controll Systems: Git&Github</h2>
                <p>this is a demo text,you can write your own context</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Skills;
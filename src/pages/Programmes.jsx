import React from 'react'
import NavBar from '../components/NavBar';
import styles from './styles/Programmes.module.css';
import spaceDay from '../assets/spaceday.png';
import isroLogo from '../assets/isro.png';
import students from '../assets/students.jpg';
import future from '../assets/future.jpg';
import aiLab from '../assets/ai_lab.jpg';
import setupOne from '../assets/setup1.png';
import setupTwo from '../assets/setup2.jpg';
import productsImg from '../assets/products.jpg'
import rocketImg from '../assets/rocketImg.jpg';
import spaceConferenceImg from '../assets/homeImg1.jpg';

const Programmes = () => {
  return (
    <div className={styles.page}>
      <NavBar programmeStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} />
      <div className={styles.pageRight}>
        <div className={styles.spaceDay}>
          <div className={styles.hero}>
            <img src={spaceDay} />
            <h1>FREE ORIENTATION ON SPACE EDUCATION</h1>
          </div>
          <div className={styles.isro}>
            <img src={isroLogo} />
            <div className={styles.isroContent}>
              <div className={styles.isroHeading}>
                <h2>An ISRO Initiative |</h2>
                <h2>Powered by Erudite Space Education & Roots Academy</h2>
                <p>🚀 Inspiring the Next Generation of Space Explorers and Future Astronauts!</p>
              </div>
              <p className={styles.isroText}>Erudite Space Education, an ISRO-registered organization, brings a FREE Orientation Program to your school, unlocking exciting opportunities in space science and technology.</p>
            </div>
            </div>
            <div className={styles.students}>
              <div className={styles.studentsContent}>
                <h2>🌟 What’s in Store for Students?</h2>
                <ul style={{marginTop: '1em'}}>
                  <li>✅ ISRO’s Contributions & Space Science Insights</li>
                  <li>✅ AI-Powered Screening Test for Space Education Program</li>
                  <li>✅ Hands-On Space Exhibition with 4 Categories:</li>
                  <ul style={{margin: '1em'}}>
                    <li>🤖 Robotics</li>
                    <li>🏠 Space Settlement Habitat Design</li>
                    <li>🎨 Poster Presentation</li>
                    <li>🛰 Satellite Design</li>
                  </ul>
                  <li>✅ Group Projects & Paper Presentations (4-5 students/team)</li>
                  <li>✅ Win Exciting Prizes & Medals!</li>
                  <li>✅ Top 100 Students Get an Exclusive ISRO Facility Visit to Sriharikota!</li>
                </ul>
              </div>
              <img src={future} />
            </div>
            <div className={styles.schools}>
              <img src={students} />
              <div className={styles.schoolsContent}>
                <h2>🚀 Why Should Schools Participate?</h2>
                <ul>
                  <li>🔹 Integrate Space & STEM Education with Core Subjects</li>
                  <li>🔹 Interactive Sessions with ISRO Scientists & Space Experts</li>
                  <li>🔹 Recognized as a Space Education Hub</li>
                  <li>🔹 Encourage Innovation & Research in Young Minds</li>
                </ul>
              </div>
            </div>
            <div className={styles.contact}>
              <h2>🌍 How to Get Started?</h2>
              <ul>
                <li>📌 Book a FREE Orientation Session at Your School Today!</li>
                <li>📧 Contact Us: <a href="mailto:eruditespaceeducation@gmail.com">eruditespaceeducation@gmail.com</a></li>
                <li>📍 Location: T-Hub, Hyderabad</li>
                <li>🚀 Explore. Innovate. Discover. The Future Astronauts Story Starts Here!</li>
              </ul>
            </div>
        </div>
        <div className={styles.lab}>
          <div className={styles.labHeading}>
            <img src={aiLab} />
            <h1>Future Robotic & Space Tech Lab</h1>
            <h2>Empowering Future Innovators with Cutting-Edge Robotics & AI</h2>
            <p>At Erudite Initiatives & Roots Academy, we are revolutionizing education with state-of-the-art Robotic & Space Labs, designed to equip students with real-world skills in robotics, AI, and space technology.</p>
            <p>Our labs foster <span className="bold">innovation, hands-on learning, and breakthrough discoveries</span> in fields such as <span className="bold">space exploration, medical robotics, industrial automation, and artificial intelligence.</span></p>
          </div>
          <div className={styles.roboLab}>
            <img src={setupOne} />
            <div className={styles.roboLabContent}>
              <h1 style={{textDecoration: 'underline'}}>Why Set Up a Robotic & Space Lab in Your Institution?</h1>
              <ul>
                <li>✅ Hands-on Learning – Engage students with practical experience in robotics & automation.</li>
                <li>✅ Future-Ready Skills – Prepare students for careers in STEMS, AI, and space research.</li>
                <li>✅ Innovative Curriculum – Industry-aligned projects that spark creativity and problem-solving.</li>
                <li>✅ Global Opportunities – Open doors to national , international competitions, research, and career paths.</li>
              </ul>
            </div>
            <img src={setupTwo} />
          </div>
          <div className={styles.roboLab}>
            <img src={productsImg} />
            <div className={styles.roboLabContent}>
              <h1 style={{textDecoration: 'underline'}}>Our Lab Offerings:</h1>
              <ul>
                <li>🔹 Basic Robotic & Space Lab – Foundation in robotics, coding & automation..</li>
                <li>🔹 Intermediate Robotic & Space Lab – Advanced programming & AI integration.</li>
                <li>🔹 Advanced Robotic & Space Lab – Specialized in AI-driven robotics & autonomous systems.</li>
                <li>🔹 Orbital Robotics & Planetary Exploration – Hands-on experience in gravity automation, satellite technologies, IOT, and planetary rovers etc.</li>
              </ul>
            </div>
            <img src={rocketImg} />
          </div>
          <div className={styles.end}>
            <h1>Be a Pioneer in Robotics Education!</h1>
            <h2>Transform your institution into a centre of excellence in robotics & AI.</h2>
          </div>
          <div className={styles.endContact}>
            <h2>📞 Contact Us Today!</h2>
            <p>📱 <a href="tel:+91-7981926596">+91-7981926596</a>, <a href="tel:+91-7981926596">9247121026</a> | ☎ <a href="tel:+91-7981926596">040-79699267</a></p>
          </div>
        </div>
        <img className={styles.spaceConferenceImg} src={spaceConferenceImg} />
      </div>
    </div>
  )
}

export default Programmes

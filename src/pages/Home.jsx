import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import styles from './styles/Home.module.css';
import yuvika from '../assets/yuvika-poster.jpg';
import eduriteLogo from '../assets/eduriteLogo.jpg';
import rootsImg from '../assets/roots_academy.jpg';
// import style from '../App.css'

const Home = () => {

  
  return (
    <div className={styles.page} >
      <NavBar homeStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} 
        click={() => setNavIsOpen(false)}
      />
      <div className={styles.pageRight} >
        <img className={styles.yuvikaImg} src={yuvika} />
        <div className={styles.edurite}>
          <div className={styles.eduriteText}>
            <h1>About Erudite Initiatives,</h1>
            <p>Erudite Initiatives, established in 1998, is a pioneer in experiential and outbound learning. A certified experiential educator leads the company, working with top international IB and CBSE schools. It was the first in Hyderabad to organize CAS programs for IB students and is a licensed IAYP activity provider for adventure journeys. The company has conducted Himalayan treks, leadership camps, and adventure programs across India, including scuba diving, kayaking, trekking, rafting, skiing, and paragliding. Recently, Erudite Initiatives became an ISRO Space Tutor Partner, promoting space science and technology among students and offering free orientation sessions from Grade 6 onwards.
            </p>
          </div>
          <img src={eduriteLogo} />
        </div>
        <div className={styles.roots}>
          <img src={rootsImg} />
          <div className={styles.rootsText}>
            <div>
              <p style={{fontSize: '0.9rem'}}>knowledge partner with erudite initiatives</p>
              <h1>About Roots Academy</h1>
            </div>
            <p>Established in <span className="bold">2009, Roots Academy</span> is a leading educational institution run by <span className="bold">Roots Educational Society</span>. With a strong commitment to academic excellence, we integrate the <span className="bold">latest technology</span> into our teaching methods, empowering students with innovative learning experiences.</p>
          </div>
        </div>
        <div className={styles.details}>
          <h3>Our Approach</h3>
          <p>Roots Academy & Erudite Initiative provides an education through both <span className="bold">academies and schools,</span> ensuring a structured and engaging learning environment. Our focus is on <span className="bold">concept-based learning</span> through interactive activities and <span className="bold">advanced training methods,</span> enabling students to grasp subject fundamentals effectively.</p>
        </div>
        <div className={styles.details}>
          <h3>STEMS Curriculum</h3>
          <p>We have designed our unique <span style={{fontWeight: 'bold'}}>STEMS (Sanjeev Technology, Engineering, and Mathematical Science)</span> curriculum to enhance students' understanding across all subjects. Our curriculum includes:</p>
          <ul>
            <li>🚀 <span className="bold">Fundamentals of Space Science</span> – Understanding astronomy, satellites, and planetary systems.</li>
            <li>🛰 <span className="bold">Technology in Space Exploration</span> – Learning about rockets, space missions, and robotics.</li>
            <li>🌍 <span className="bold">Real-World Projects</span> – Hands-on student projects like model satellite designs, AI simulations, and coding for space applications.</li>
          </ul>
          <ul>
            <li>✔ <span className="bold">Innovative Thinking</span> – Encouraging students to explore new concepts and ideas.</li>
            <li>✔ <span className="bold">Skill Development</span> – Strengthening analytical, problem-solving, and technical skills.</li>
            <li>✔ <span className="bold">Self-Learning Methods</span> – Empowering students to learn independently through practical applications.</li>
          </ul>
        </div>
        <div className={styles.details}>
          <h3>Space Science & Technology</h3>
          <p>At <span className="bold">Roots Academy</span> & Erudite Space Education, we are committed to fostering curiosity and knowledge about <span className="bold">Space Science and Technology.</span></p>
        </div>
        <div className={styles.details}>
          <h3>Student Innovation & Projects</h3>
          <p>We encourage students to engage in <span style={{fontWeight: 'bold'}}>interactive projects and research-based learning,</span> including:</p>
          <ul>
            <li>🔬 <span className="bold">STEM Workshops & Hackathons</span> – Collaborate on real-world problems and innovations.</li>
            <li>📡 <span className="bold">Space Technology Projects</span> – Building prototypes, robotic arms, and AI-driven space simulations.</li>
            <li>🛠 <span className="bold">Hands-on Engineering Activities</span> – Working on drones, IoT, and coding challenges.</li>
          </ul>
          <ul>
            <li>🌱 <span className="bold">Technology-Driven Education</span> – Smart classrooms & digital learning tools.</li>
            <li>📚 <span className="bold">Activity-Based Training</span> – Hands-on learning for better subject clarity.</li>
            <li>🚀 <span className="bold">Innovation & Creativity</span> – Encouraging a mind-set of discovery and exploration.</li>
            <li>🔭 <span className="bold">Space Science & Tech Focus</span> – Inspiring future scientists and engineers.</li>
            <li>🎯 <span className="bold">Holistic Development</span> – Enhancing cognitive, social, and emotional skills.</li>
          </ul>
          <p><span className="bold">Erudite Space Education & Roots Academy</span> experience a <span className="bold">revolutionary self-learning system</span> that shapes the future of education!</p>
        </div>
      </div>
    </div>
  )
}

export default Home

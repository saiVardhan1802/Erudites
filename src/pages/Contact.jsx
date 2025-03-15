import React from 'react'
import NavBar from '../components/NavBar';
import styles from './styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.page}>
      <NavBar contactStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} />
    <div className={styles.pageRight}>
      <p className='bold'>Erudite Initiative</p>
      <p>T-Hub- Hyderabad</p>
      <p>Telangana state, India</p>
      <p>Visit us: <a href="http://www.eruditexl.com" target="_blank">www.eruditexl.com</a></p>
      <p>Roots Academy</p>
      <p>Bhavani nagar colony, ECIL-Kapra, Hyderabad-62</p>
      <p>Telangana state, India</p>
      <p>Email: <a href="mailto:eruditespaceeducation@gmail.com">eruditespaceeducation@gmail.com</a>, <a href="mailto:kskrootsacademy@gmail.com">kskrootsacademy@gmail.com</a></p>
      <p>Ph. no.: <a href="tel:+919247121026">9247121026</a></p>
    </div>

    </div>
  )
}

export default Contact


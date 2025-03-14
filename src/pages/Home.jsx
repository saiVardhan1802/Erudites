import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import imgOne from '../assets/homeImg1.jpg';
import imgTwo from '../assets/homeImg2.jpg';
import styles from './styles/Home.module.css';
import MenuIcon from '@mui/icons-material/Menu';

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
        <img className={styles.imgOne} src={imgOne} />
        <img className={styles.imgTwo} src={imgTwo} />
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import NavBar from '../components/NavBar';
import styles from './styles/SpaceLab.module.css';
import roboLabPoster from '../assets/homeImg2.jpg';


const SpaceLab = () => {
  return (
    <div className={styles.page}>
      <NavBar spaceLabStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} />
      <div className={styles.pageRight}>
        <img src={roboLabPoster} />
      </div>
    </div>
  )
}

export default SpaceLab

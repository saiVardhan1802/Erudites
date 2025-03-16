import React from 'react'
import NavBar from '../components/NavBar';
import styles from './styles/Gallery.module.css'
import aiLab from '../assets/ai_lab.jpg';
import future from '../assets/future.jpg';
import products from '../assets/products.jpg';
import rocketImg from '../assets/rocketImg.jpg';
import setUpOne from '../assets/setup1.png';
import setUpTwo from '../assets/setup2.jpg';
import students from '../assets/students.jpg';

const Gallery = () => {
  return (
    <div className={styles.page}>
      <NavBar galleryStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} />
      <div className={styles.pageRight}>
        <img style={{
          width: '45%',
          height: 'auto'
        }} src={future} />
        <img style={{
          width: '45%',
          height: 'auto'
        }} src={students} />
        <img src={products} />
        <img src={setUpOne} />
        <img src={rocketImg} />
        <img src={setUpTwo} />
      </div>
    </div>
  )
}

export default Gallery

import React from 'react'
import NavBar from '../components/NavBar'


const Gallery = () => {
  return (
    <div style={{
        display: 'flex',
        width: '100vw',
        height: '100vh'
    }}>
      <NavBar galleryStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} />
    </div>
  )
}

export default Gallery

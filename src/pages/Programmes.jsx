import React from 'react'
import NavBar from '../components/NavBar'

const Programmes = () => {
  return (
    <div style={{
        display: 'flex',
        width: '100vw',
        height: '100vh'
    }}>
      <NavBar programmeStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} />
    </div>
  )
}

export default Programmes

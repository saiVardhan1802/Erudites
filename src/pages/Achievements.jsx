import React from 'react'
import NavBar from '../components/NavBar';
import styles from './styles/Achievements.module.css';


const Achievements = () => {
  return (
    <div > {/* add flex style later */}
      <NavBar achievementStyle={{
        backgroundColor: '#E5C100 ',
        color: '#5D3FD3',
      }} />
    </div>
  )
}

export default Achievements

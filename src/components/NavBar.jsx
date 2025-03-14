import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote'; // Programmes
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'; // Achievements
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Space Lab
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'; // Gallery
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact
import styles from './styles/NavBar.module.css';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
    const navigate = useNavigate();
  return (
    <div className={styles.navBar}>
        <div onClick={() => navigate('/')} style={{...props.homeStyle}}>
            <HomeIcon />
            <p>Home</p>
        </div>
        <div onClick={() => navigate('/programmes')} style={{...props.programmeStyle}}>
            <EventNoteIcon />
            <p>Programmes</p>
        </div>
        <div onClick={() => navigate('/achievements')} style={{...props.achievementStyle}}>
            <MilitaryTechIcon />
            <p>Achievements</p>
        </div>
        <div onClick={() => navigate('/space-lab')} style={{...props.spaceLabStyle}}>
            <RocketLaunchIcon />
            <p>Space Lab</p>
        </div>
        <div onClick={() => navigate('/gallery')} style={{...props.galleryStyle}}>
            <PhotoLibraryIcon />
            <p>Gallery</p>
        </div>
        <div onClick={() => navigate('/contact')} style={{...props.contactStyle}}>
            <ContactMailIcon />
            <p>Contact</p>
        </div>
    </div>
  )
}

export default NavBar

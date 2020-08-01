import React from 'react';

import Directory from '../../components/directory-menu/directory-menu';
import { HomePageContainer } from './homepage.style.jsx'

import './homepage.styles.scss'

 const Homepage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}
export default Homepage
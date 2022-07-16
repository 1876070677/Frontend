import React from 'react';
import styles from './content.module.css';
import Home from '../section/section1';
import AboutMe from '../section/section2';
import Portfolio from '../section/section3';

function Content() {
    return (
        <div className={styles.content_area}>
            <div className={styles.animated_sections}>
                <Home />
                <AboutMe />
                <Portfolio />
            </div>
        </div>
    )
}

export default Content;
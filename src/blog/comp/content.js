import React from 'react';
import styles from './content.module.css';
import Home from '../section/section1';
import AboutMe from '../section/section2';

function Content() {
    return (
        <div className={styles.content_area}>
            <div className={styles.animated_sections}>
                {false && <Home />}
                {true && <AboutMe />}
            </div>
        </div>
    )
}

export default Content;
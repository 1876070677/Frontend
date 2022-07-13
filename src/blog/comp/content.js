import React from 'react';
import styles from './content.module.css';
import Home from '../section/section1';

function Content() {
    return (
        <div className={styles.content_area}>
            <div className={styles.animated_sections}>
                <Home />
            </div>
        </div>
    )
}

export default Content;
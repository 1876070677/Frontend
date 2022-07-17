import React, { useEffect } from 'react';
import styles from './body.module.css'
import SiteHeader from './comp/siteHeader';
import Content from './comp/content';
import ArrowNav from './comp/arrownav';
import Toggle from './comp/toggle';

function BlogBody() {

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    useEffect(()=> {
    
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    })
    return(
        <div className={styles.blogBody}>
            <div className={styles.page}>
                <div className={styles.page_content}>
                    <SiteHeader></SiteHeader>
                    <Content></Content>
                    <ArrowNav />
                    <Toggle />
                </div>
            </div>
        </div>
    )
}

export default BlogBody;
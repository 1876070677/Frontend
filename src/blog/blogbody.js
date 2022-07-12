import React from 'react';
import styles from './body.module.css'
import SiteHeader from './comp/siteHeader';
import Content from './comp/content';

function blogBody() {
    return(
        <div className={styles.blogBody}>
            <div className={styles.page}>
                <div className={styles.page_content}>
                    <SiteHeader></SiteHeader>
                    <Content></Content>
                </div>
            </div>
        </div>
    )
}

export default blogBody;
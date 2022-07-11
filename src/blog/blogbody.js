import React from 'react';
import styles from './body.module.css'
import SiteHeader from './comp/siteHeader';

function blogBody() {
    return(
        <div className={styles.blogBody}>
            <div className={styles.page}>
                <div className={styles.page_content}>
                <SiteHeader></SiteHeader>
                </div>
            </div>
        </div>
    )
}

export default blogBody;
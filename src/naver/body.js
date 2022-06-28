import React, { Component } from 'react';
import styles from './body.module.css';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className={styles.login_wrap}>
                    <ul className={styles.menu_wrap} role="tablist">
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none">
                                <span className={styles.menu_text}>
                                    <span className={styles.text}>ID 로그인</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none">
                                <span className={styles.menu_text}>
                                    <span className={styles.text}>일회용 번호</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none">
                                <span className={styles.menu_text}>
                                    <span className={styles.text}>QR코드</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Content;
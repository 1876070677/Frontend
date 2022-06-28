import React, { Component } from 'react';
import styles from './body.module.css';
import id_login from './idLogin(activate).png';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className={styles.login_wrap}>
                    <ul className={styles.menu_wrap} role="tablist">
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none" className={styles.menu_id}>
                                <span className={styles.menu_text}>
                                    <img src={id_login} className={styles.id_login_img} alt="id_login"></img>
                                    <span className={styles.text}>ID 로그인</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none" className={styles.menu_ones}>
                                <span className={styles.menu_text}>
                                    <span className={styles.text}>일회용번호</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none" className={styles.menu_qr}>
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
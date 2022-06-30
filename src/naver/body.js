import React, { Component } from 'react';
import styles from './body.module.css';
import id_login from './idLogin(activate).png';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className={styles.login_wrap}>
                    <ul className={styles.menu_wrap}>
                        <li className={styles.menu_item}>
                            <a href="#none" className={styles.menu_id}>
                                <div className={styles.img_wrap}>
                                    <img src={id_login} className={styles.id_login_img} alt="id_login"></img>
                                </div>
                                <span className={styles.menu_text}>
                                    <span className={styles.text}>ID 로그인</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none" className={styles.menu_ones}>
                                <div className={styles.img_wrap}>
                                    <img src={id_login} className={styles.id_login_img} alt="id_login"></img>
                                </div>
                                <span className={styles.menu_text}>
                                    <span className={styles.text}>일회용 번호</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item} role="presentation">
                            <a href="#none" className={styles.menu_qr}>
                                <div className={styles.img_wrap}>
                                    <img src={id_login} className={styles.id_login_img} alt="id_login"></img>
                                </div>
                                <span className={styles.menu_text}>
                                    <span className={styles.text}>QR 코드</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <form>
                        <div className={styles.panel_wrap}>
                            <div className={styles.input_wrap}>
                                <input type="text" placeholder='아이디' className={styles.input_id}></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Content;
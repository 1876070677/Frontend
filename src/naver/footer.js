import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
    render() {
        return(
            <div className={styles.footer}>
                <div className={styles.footer_inner}>
                    <ul className={styles.footer_link}>
                        <li>
                            <a className={styles.footer_item} href="http://www.naver.com/rules/service.html">
                                <span class={styles.text}>이용약관</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.footer_item} href="http://www.naver.com/rules/service.html">
                                <span class={styles.text}>개인정보처리방침</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.footer_item} href="http://www.naver.com/rules/service.html">
                                <span class={styles.text}>책임의 한계와 법적고지</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.footer_item} href="http://www.naver.com/rules/service.html">
                                <span class={styles.text}>회원정보 고객센터</span>
                            </a>
                        </li>
                    </ul>
                    <div className={styles.footer_copy}>
                        <a href="https://www.navercorp.com">
                            <span className={styles.footer_logo}>
                                <span className={styles.blind}>네이버</span>
                            </span>
                        </a>
                        <span className={styles.ft_text}>Copyright</span>
                        <span className={styles.corp}>© Kim Si Hyeon.</span>
                        <span className={styles.ft_text}>All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
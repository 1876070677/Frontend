import React, { Component } from 'react';
import styles from "./header.module.css"

class Header extends Component {
    render(){
        return(
            <div className={styles.header}>
                <div className={styles.header_inner}>
                    <div className={styles.lang} id="show_locale_switch">
                        <select id="locale_switch" name="locale_switch" title="언어선택" className={styles.sel}>
                            <option value="ko_KR">한국어</option>
                            <option value="en_US">English</option>
                            <option value="zh-Hans_CN">中文(简体)</option>
                            <option value="zh-Hant_TW">中文(台灣)</option>
                        </select>
                    </div>
                    
                    <a href="https://www.naver.com" className={styles.logo}>
                        <h1 className={styles.blind}>naver</h1>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;
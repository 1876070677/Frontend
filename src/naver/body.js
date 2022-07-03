import React, { Component } from 'react';
import styles from './body.module.css';
import adv from './icon/ad.jpg';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabInfo : 0
        };
    }

    selectTab = () =>{
        alert(this.state.tabInfo);
    }

    render() {
        return (
            <div className='content'>
                <div className={styles.login_wrap}>
                    <ul className={styles.menu_wrap}>
                        <li className={styles.menu_item}>
                            <a href="#none" className={styles.menu_id} onClick={this.selectTab}>
                                <span className={styles.menu_text}>
                                    <span className={styles.id_login_sel}>
                                        <span className={styles.blind}>ID로그인</span>
                                    </span>
                                    <span className={styles.text}>ID 로그인</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#none" className={styles.menu_ones}>
                                <span className={styles.menu_text}>
                                    <span className={styles.id_temp_sel}>
                                        <span className={styles.blind}>ID로그인</span>
                                    </span>
                                    <span className={styles.text}>일회용 번호</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#none" className={styles.menu_qr}>
                                <span className={styles.menu_text}>
                                    <span className={styles.id_qr_sel}>
                                        <span className={styles.blind}>ID로그인</span>
                                    </span>
                                    <span className={styles.text}>QR 코드</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <form>
                        <div className={styles.panel_wrap}>
                            <div className={styles.panel_inner}>
                                <div className={styles.id_pw_wrap}>
                                    <div className={styles.input_row}>
                                        <span className={styles.icon_id}>
                                            <span className={styles.blind}>비밀번호</span>
                                        </span>
                                        <input type="text" placeholder='아이디' className={styles.input_text}></input>
                                    </div>
                                    <div className={styles.input_row}>
                                        <span className={styles.icon_pw}>
                                            <span className={styles.blind}>비밀번호</span>
                                        </span>
                                        <input type="text" placeholder='비밀번호' className={styles.input_text}></input>
                                    </div>
                                </div>
                                <div className={styles.login_keep_wrap}>
                                    <div className={styles.keep_check}>
                                        <input type="checkbox" id="keep" name="nvlong" className={styles.input_keep} value="off"></input>
                                        <label for="keep" className={styles.keep_text}>
                                            로그인 상태 유지
                                        </label>
                                    </div>
                                    <div className={styles.ip_check}>
                                        <span className={styles.ip_text}>IP보안</span>
                                        <div className={styles.switch_wrap}>
                                            <input type="checkbox" id="switch" className={styles.switch_checkbox} value="off"></input>
                                            <label className={styles.switch_label} htmlFor="switch">
                                                <span className={styles.onf_btn}></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btn_login_wrap}>
                                    <button type="submit" className={styles.btn_login} id="login">
                                        <span className={styles.btn_text}>로그인</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <ul className={styles.find_wrap}>
                    <li>
                        <a href="https://nid.naver.com/user2/api/route?m=routePwInquiry&lang=ko_KR" className={styles.find_text}>비밀번호 찾기</a>
                    </li>
                    <li>
                        <a href="https://nid.naver.com/user2/api/route?m=routePwInquiry&lang=ko_KR" className={styles.find_text}>아이디 찾기</a>
                    </li>
                    <li>
                        <a href="https://nid.naver.com/user2/api/route?m=routePwInquiry&lang=ko_KR" className={styles.find_text}>회원가입</a>
                    </li>
                </ul>
                <div className={styles.adv}>
                    <img src={adv} className={styles.adv} alt="adv"></img>
                </div>
            </div>
        )
    }
}

export default Content;
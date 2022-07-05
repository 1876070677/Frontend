import React, { Component } from 'react';
import styles from './body.module.css';
import adv from './icon/ad.jpg';
import styled from 'styled-components';
import axios from 'axios';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idFocus : false,
            pwFocus : false,
            nbFocus : false,
            nudgeOpen : true,
            currentIdx : 1,
            userId : '',
            userPw : '',
            nickname : ''
        };
        this.autoIdFocus = React.createRef();
    }

    autoFocus() {
        console.log(this.autoIdFocus);
        this.autoIdFocus.current.focus();
    }

    updateIdFocus = () => {
        this.setState({
            idFocus : !this.state.idFocus
        })
    }

    updatePwFocus = () => {
        this.setState({
            pwFocus: !this.state.pwFocus
        })
    }

    updateNbFocuse = () => {
        this.setState({
            nbFocus: !this.state.nbFocus
        })
    }

    updateNudge = () => {
        this.setState({
            nudgeOpen: !this.state.nudgeOpen
        })
    }

    idOptionChange = (param, e) =>{
        if (param === 3) {
            param = 1
            alert("구현되지 않은 기능입니다.")
        }
        this.setState({
            currentIdx: param
        }, () => param === 1? this.autoFocus() : null)
    }

    login = () => {
        if (this.state.userId === "" || this.state.userPw === "") {
            alert("아이디 또는 비밀번호를 입력해주세요");
            return;
        }
        // 아이디와 비번이 입력되어 있는 경우
        axios({
            method: "post",
            url: "http://shbox.shop:3007/user/login",
            data: {
                id: this.state.userId,
                password: this.state.userPw
            },
        }).then((res) => {
            console.log(res)
            this.setState({
                userId : res.data.content.id,
                userPw : res.data.content.password
            })
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    render() {
        return (
            <div className='content'>
                <div className={styles.login_wrap}>
                    <ul className={styles.menu_wrap}>
                        <li className={styles.menu_item}>
                            <a href="#none" className={this.state.currentIdx === 1? styles.menu_id_sel : styles.menu_id} onClick={(e) => {this.idOptionChange(1, e)}}>
                                <span className={styles.menu_text}>
                                    <span className={this.state.currentIdx === 1? styles.id_login_sel : styles.id_login_nosel}>
                                        <span className={styles.blind}>ID로그인</span>
                                    </span>
                                    <span className={this.state.currentIdx === 1? styles.text_sel : styles.text}>ID 로그인</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#none" className={this.state.currentIdx === 2? styles.menu_ones_sel : styles.menu_ones} onClick={(e) => {this.idOptionChange(2, e)}}>
                                <span className={styles.menu_text}>
                                    <span className={this.state.currentIdx === 2? styles.id_temp_sel: styles.id_temp_nosel}>
                                        <span className={styles.blind}>일회용로그인</span>
                                    </span>
                                    <span className={this.state.currentIdx === 2? styles.text_sel : styles.text}>일회용 번호</span>
                                </span>
                            </a>
                        </li>
                        <li className={styles.menu_item}>
                            <a href="#none" className={this.state.currentIdx === 3? styles.menu_qr_sel : styles.menu_qr} onClick={(e) => {this.idOptionChange(3, e)}}>
                                <span className={styles.menu_text}>
                                    <span className={this.state.currentIdx === 3? styles.id_qr_sel : styles.id_qr_nosel}>
                                        <span className={styles.blind}>QR로그인</span>
                                    </span>
                                    <span className={this.state.currentIdx === 3? styles.text_sel : styles.text}>QR 코드</span>
                                </span>
                            </a>
                            {this.state.nudgeOpen && <NudgeBanner>
                                <NudgeText>ID : sihyeon / PW : sihyeon1! 로그인가능</NudgeText>
                                <button type="button" className={styles.nudge_close} onClick={this.updateNudge}>
                                    <span className={styles.icon_nudge_close}></span>
                                </button>
                            </NudgeBanner>}
                        </li>
                    </ul>
                    <form>
                        <div className={styles.panel_wrap}>
                            <div className={this.state.currentIdx === 1 ? styles.panel_inner : styles.panel_hide}>
                                <div className={styles.id_pw_wrap}>
                                    <div className={this.state.idFocus? styles.input_row_sel : styles.input_row}>
                                        <span className={this.state.idFocus? styles.icon_id_sel : styles.icon_id}>
                                            <span className={styles.blind}>아이디</span>
                                        </span>
                                        <input ref={this.autoIdFocus} type="text" name="id_input" placeholder='아이디' value={this.state.userId} className={styles.input_text} onFocus={this.updateIdFocus} onBlur={this.updateIdFocus} autoFocus
                                        onChange={(e) => {this.setState({userId : e.target.value})}}></input>
                                    </div>
                                    <div className={this.state.pwFocus? styles.input_row_sel : styles.input_row}>
                                        <span className={this.state.pwFocus ? styles.icon_pw_sel : styles.icon_pw}>
                                            <span className={styles.blind}>비밀번호</span>
                                        </span>
                                        <input type="password" name="pw_input" placeholder='비밀번호' className={styles.input_text} onFocus={this.updatePwFocus} onBlur={this.updatePwFocus}
                                        onChange={(e) => {this.setState({userPw : e.target.value})}}></input>
                                    </div>
                                </div>
                                <div className={styles.login_keep_wrap}>
                                    <div className={styles.keep_check}>
                                        <input type="checkbox" id="keep" name="nvlong" className={styles.input_keep} value="off"></input>
                                        <label htmlFor="keep" className={styles.keep_text}>
                                            로그인 상태 유지
                                        </label>
                                    </div>
                                    <div className={styles.ip_check}>
                                        <a href="https://nid.naver.com/login/ext/help_ip3.html" target="_blank" title="IP보안" className={styles.ip_text} rel="noopener noreferrer">
                                            <span>IP보안</span>
                                        </a>
                                        <div className={styles.switch_wrap}>
                                            <input type="checkbox" id="switch" className={styles.switch_checkbox} value="off"></input>
                                            <label className={styles.switch_label} htmlFor="switch">
                                                <span className={styles.onf_btn}></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btn_login_wrap}>
                                    <button type="submit" className={styles.btn_login} id="login" onClick={this.login}>
                                        <span className={styles.btn_text}>로그인</span>
                                    </button>
                                </div>
                            </div>
                            <div className={this.state.currentIdx === 2 ? styles.panel_inner_ones : styles.panel_hide}>
                                <div className={styles.ones_text}>
                                     네이버앱의&nbsp;
                                    <span className={styles.accent}>
                                        메뉴 > 설정&nbsp;
                                        <em class={styles.bullet_set}></em>
                                        &nbsp;> 로그인 아이디 관리
                                        <br></br>
                                        > 일회용 로그인 번호 받기
                                    </span>
                                    에 보이는 번호를 입력해 주세요. 
                                </div>
                                <div className={this.state.nbFocus ? styles.input_number_sel : styles.input_number} onFocus={this.updateNbFocuse} onBlur={this.updateNbFocuse}>
                                    <input type="text" name="key" placeholder="번호를 입력하세요." title="번호를 입력하세요." 
                                    className={styles.input_text_number}></input>
                                </div>
                                <div className={styles.btn_ones_wrap}>
                                    <button type='submit' className={styles.btn_login}>
                                        <span className={styles.btn_text}>로그인</span>
                                    </button>
                                </div>      
                            </div>
                        </div>
                    </form>
                </div>
                <ul className={styles.find_wrap}>
                    <li>
                        <a href="https://nid.naver.com/user2/api/route?m=routePwInquiry&lang=ko_KR" className={styles.find_text} target="_blank" rel="noopener noreferrer">비밀번호 찾기</a>
                    </li>
                    <li>
                        <a href="https://nid.naver.com/user2/api/route?m=routeIdInquiry&lang=ko_KR" className={styles.find_text} target="_blank" rel="noopener noreferrer">아이디 찾기</a>
                    </li>
                    <li>
                        <a href="https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR" className={styles.find_text} target="_blank" rel="noopener noreferrer">회원가입</a>
                    </li>
                </ul>
                <div className={styles.adv}>
                    <img src={adv} className={styles.adv} alt="adv"></img>
                </div>
            </div>
        )
    }
}

const NudgeBanner = styled.div`
    position: absolute;
    top: -17px;
    right: -37px;
    height: 25px;
    padding: 4px 20px 3px 9px;
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    border: solid 1px #03c75a;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 10;
`;

const NudgeText = styled.span`
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -.56px;
    white-space: nowrap;
    color: #03c75a;
    vertical-align: top;
`;

export default Content;
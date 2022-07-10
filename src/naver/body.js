import React, {useState, useRef, useEffect}from 'react';
import styles from './body.module.css';
import adv from './icon/ad.jpg';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {updateNudge} from '../store/updateBodyState';
import {setNickname} from '../store/userInfo';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {USER_LOGIN, GET_USER_INFO} from '../static/link';

function Content(props) {

    const dispatch = useDispatch();
    const ngOpen = useSelector(state => {
        return state.changeBodyState.nudgeOpen;
    })
    const navigate = useNavigate();

    const [idFocus, setIF] = useState(false);
    const [pwFocus, setPF] = useState(false);
    const [nbFocus, setNB] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(1);
    const [errorNum, setError] = useState(0);
    const autoIdFocus = useRef();
    const autoPwFocus = useRef();

    const updateIdFocus = () => {
        setIF(!idFocus);
    }

    const updatePwFocus = () => {
        setPF(!pwFocus);
    }

    const updateNbFocuse = () => {
        setNB(!nbFocus);
    }

    const idOptionChange = (param, e) =>{
        if (param === 3) {
            param = 1
            alert("구현되지 않은 기능입니다.")
        }
        setCurrentIdx(param);
    }

    const checkCapsLock = (e) => {
        let result = e.getModifierState("CapsLock");
        if (result) {
            setError(4);
        }else {
            setError(0);
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (e.target.id_input.value === "") {
            setError(1)
            autoIdFocus.current.focus();
        } else if (e.target.pw_input.value === "") {
            setError(2)
            autoPwFocus.current.focus();
        } else {
            const response = await axios.post(
                USER_LOGIN, {
                    id : e.target.id_input.value,
                    password : e.target.pw_input.value
                },
                {withCredentials : true}
            )
            if (response.data.code === 0) {
                //로그인 성공시
                window.localStorage.setItem('rftk', response.data.rftk);
                //dispatch(setNickname(response.data.nickname));
                //쿠키에 저장된 actk를 이용하여 유저 정보 요청
                const userInfo = await axios.get(
                    GET_USER_INFO,
                    {withCredentials : true}
                );
                dispatch(setNickname(userInfo.data.nickname));
                navigate('/dev', {replace: true})
            } else {
                // 로그인 실패
                setError(3);
                console.log(response.data);
            }
        }
    }

    useEffect(() =>{
        if(currentIdx === 1) {
            autoIdFocus.current.focus();
        }
    }, [currentIdx])

    return (
        <div className='content'>
            <div className={styles.login_wrap}>
                <ul className={styles.menu_wrap}>
                    <li className={styles.menu_item}>
                        <Link to="/" className={currentIdx === 1? styles.menu_id_sel : styles.menu_id} onClick={(e) => {idOptionChange(1, e)}}>
                            <span className={styles.menu_text}>
                                <span className={currentIdx === 1? styles.id_login_sel : styles.id_login_nosel}>
                                    <span className={styles.blind}>ID로그인</span>
                                </span>
                                <span className={currentIdx === 1? styles.text_sel : styles.text}>ID 로그인</span>
                            </span>
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/" className={currentIdx === 2? styles.menu_ones_sel : styles.menu_ones} onClick={(e) => {idOptionChange(2, e)}}>
                            <span className={styles.menu_text}>
                                <span className={currentIdx === 2? styles.id_temp_sel: styles.id_temp_nosel}>
                                    <span className={styles.blind}>일회용로그인</span>
                                </span>
                                <span className={currentIdx === 2? styles.text_sel : styles.text}>일회용 번호</span>
                            </span>
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/" className={currentIdx === 3? styles.menu_qr_sel : styles.menu_qr} onClick={(e) => {idOptionChange(3, e)}}>
                            <span className={styles.menu_text}>
                                <span className={currentIdx === 3? styles.id_qr_sel : styles.id_qr_nosel}>
                                    <span className={styles.blind}>QR로그인</span>
                                </span>
                                <span className={currentIdx === 3? styles.text_sel : styles.text}>QR 코드</span>
                            </span>
                        </Link>
                        {ngOpen && <NudgeBanner>
                            <NudgeText>ID : sihyeon / PW : sihyeon1! 로그인가능</NudgeText>
                            <button type="button" className={styles.nudge_close} onClick={() =>{dispatch(updateNudge())}}>
                                <span className={styles.icon_nudge_close}></span>
                            </button>
                        </NudgeBanner>}
                    </li>
                </ul>
                <form onSubmit={submitHandler}>
                    <div className={styles.panel_wrap}>
                        <div className={currentIdx === 1 ? styles.panel_inner : styles.panel_hide}>
                            <div className={styles.id_pw_wrap}>
                                <div className={idFocus? styles.input_row_sel : styles.input_row}>
                                    <span className={idFocus? styles.icon_id_sel : styles.icon_id}>
                                        <span className={styles.blind}>아이디</span>
                                    </span>
                                    <input type="text" name="id_input" ref={autoIdFocus} placeholder='아이디' className={styles.input_text} onFocus={updateIdFocus} onBlur={updateIdFocus} autoFocus
                                    defaultValue="sihyeon"></input>
                                </div>
                                <div className={pwFocus? styles.input_row_sel : styles.input_row}>
                                    <span className={pwFocus ? styles.icon_pw_sel : styles.icon_pw}>
                                        <span className={styles.blind}>비밀번호</span>
                                    </span>
                                    <input type="password" name="pw_input" ref={autoPwFocus} placeholder='비밀번호' className={styles.input_text} onFocus={updatePwFocus} onBlur={updatePwFocus}
                                    onKeyDown={(e) => checkCapsLock(e)} defaultValue="sihyeon1!"></input>
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
                            {errorNum === 1 && <div className={styles.login_error_wrap}>
                                <div className={styles.error_message}>
                                    <strong>아이디</strong>를 입력해주세요.
                                </div>
                            </div>}
                            {errorNum === 2 && <div className={styles.login_error_wrap}>
                                <div className={styles.error_message}>
                                    <strong>비밀번호</strong>를 입력해주세요.
                                </div>
                            </div>}
                            {errorNum === 3 && <div className={styles.login_error_wrap}>
                                <div className={styles.error_message}>
                                    아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br />
                                    입력하신 내용을 다시 확인해주세요.
                                </div>
                            </div>}
                            {errorNum === 4 && <div className={styles.login_error_wrap}>
                                <div className={styles.error_message}>
                                    <strong>CapsLock</strong>이 켜져있습니다.
                                </div>
                            </div>}
                            <div className={styles.btn_login_wrap}>
                                <button type="submit" className={styles.btn_login} id="login">
                                    <span className={styles.btn_text}>로그인</span>
                                </button>
                            </div>
                        </div>
                        <div className={currentIdx === 2 ? styles.panel_inner_ones : styles.panel_hide}>
                            <div className={styles.ones_text}>
                                    네이버앱의&nbsp;
                                <span className={styles.accent}>
                                    메뉴 > 설정&nbsp;
                                    <em className={styles.bullet_set}></em>
                                    &nbsp;> 로그인 아이디 관리
                                    <br></br>
                                    > 일회용 로그인 번호 받기
                                </span>
                                에 보이는 번호를 입력해 주세요. 
                            </div>
                            <div className={nbFocus ? styles.input_number_sel : styles.input_number} onFocus={updateNbFocuse} onBlur={updateNbFocuse}>
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
                <img src={adv} className={styles.adv_img} alt="adv"></img>
            </div>
        </div>
    )
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
    @media (max-width: 470px) {
        display:none;
    }
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
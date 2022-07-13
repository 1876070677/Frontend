import styles from './header.module.css';
import profileImg from '../img/profile.jpg';
import {Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {TbBook2} from 'react-icons/tb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
function siteHeader() {
    return(
        <header className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.header_photo}>
                    <img src={profileImg} alt="profile"></img>
                </div>    
            </div>
            <div className={styles.header_title}>
                <h2>조회수</h2>
                <h4>Backend Developer</h4>
            </div>
            <ul className={styles.main_menu}>
                <li className={styles.active}>
                    <Link to="/" className={styles.nav}>
                        <span className={`${styles.menu_icon} ${styles.lnr} ${styles.lnr_home}`}>
                            <AiOutlineHome />
                        </span>
                        <span className={styles.link_text}>Home</span>
                    </Link>
                </li>
                <li className={styles.active}>
                    <Link to="/" className={styles.nav}>
                        <span className={`${styles.menu_icon} ${styles.lnr} ${styles.lnr_user}`}>
                            <AiOutlineUser />
                        </span>
                        <span className={styles.link_text}>About Me</span>
                    </Link>
                </li>
                <li className={styles.active}>
                    <Link to="/" className={styles.nav}>
                        <span className={`${styles.menu_icon} ${styles.lnr} ${styles.lnr_book}`}>
                            <TbBook2 className={styles.home}/>
                        </span>
                        <span className={styles.link_text}>Portfolio</span>
                    </Link>
                </li>
            </ul>
            <div className={styles.social_links}>
                <ul>
                    <li>
                        <a href="https://github.com/1876070677" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/o_sihyeon_o/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://velog.io/@1876070677" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faBlog} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.header_buttons}>
                <a href="mailto:1876070677@shbox.shop" className={styles.btn_primary}>
                    <span className={styles.button_text}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    &nbsp; Contact Me
                </a>
            </div>
            <div className={styles.copyrights}>@ 2022 All rights reserved.</div>
        </header>
    )
}

export default siteHeader;
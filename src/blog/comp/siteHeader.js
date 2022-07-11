import styles from './header.module.css';
import profileImg from '../img/profile.jpg';
function siteHeader() {
    return(
        <header className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.header_photo}>
                    <img src={profileImg} alt="profile"></img>
                </div>    
            </div>
        </header>
    )
}

export default siteHeader;
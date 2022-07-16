import React, {useEffect} from 'react';
import styles from './section1.module.css'
import {useSelector, useDispatch} from 'react-redux';
import {setSbIdx} from '../../store/animate';

function Home() {

    const dispatch = useDispatch();
    const sbIdx = useSelector(state => {
        return state.animate.subtitle;
    })

    useEffect(() => {
        setTimeout(() => {dispatch(setSbIdx())}, 5000);
    }, [dispatch, sbIdx])

    return (
        <section className={styles.animated_section}>
            <div className={`${styles.section_content} ${styles.vcentered}`}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.title_block}>
                            <h2 className={styles.title_text}>WELCOME</h2>
                            <div className="item">
                                <div className={sbIdx === 0 ? styles.subtitle : styles.sb_disable}>
                                    Hello, Welcome to my portfolio.
                                </div>
                                <div className={sbIdx === 1 ? styles.subtitle : styles.sb_disable}>
                                    안녕하세요, 저의 포트폴리오를 방문해주셔서 감사합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
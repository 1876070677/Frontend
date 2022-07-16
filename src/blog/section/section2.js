import React, {useState, useEffect} from 'react';
import styles from './section2.module.css'
import RequestServer from '../../Axios/Requst';
import {GET_ACTIVITY} from '../../static/link';
import {useSelector, useDispatch} from 'react-redux';

function AboutMe() {

    const [act, setAct] = useState([]);

    useEffect(() => {
        RequestServer("get", GET_ACTIVITY).then(response => {
            if (response.code === 0) {
                setAct(response.content);
            }
        })
    }, [])

    return (
        <section className={styles.animated_section}>
            <div className={styles.section_content}>
                <div className={styles.page_title}>
                    <h2>About <span>Me</span></h2>
                </div>
                <div className={styles.row}>
                    <div className={styles.introduce}>
                        <p>
                            안녕하세요, 고등학생 때부터 개발자를 꿈꿔온 학생입니다.
                            <br />
                            저는 역량을 키우기 위해 1년동안 MSA(Micro Service Architecture)와 관련된 연구를 하는 Lab실에서 학부생 인턴으로 일하였습니다.
                            <br />
                            최근 경험한 프로젝트에서는 Nodejs를 이용하여 백엔드 개발을 주로 하였습니다.
                            <br />
                            현재 페이지는 React를 이용하여 제작된 페이지이며, 지금까지 저의 개발자로서의 얘기를 담고 있습니다.
                            <br />
                            자세한 내용은 Github에서 확인하실 수 있습니다.
                            <br />
                            감사합니다!!
                        </p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_list}>
                            <ul>
                                <li>
                                    <span className={styles.title}>Name</span>
                                    <span className={styles.value}>김시현 (Sihyeon, Kim)</span>
                                </li>
                                <li>
                                    <span className={styles.title}>Age</span>
                                    <span className={styles.value}>25</span>
                                </li>
                                <li>
                                    <span className={styles.title}>Address</span>
                                    <span className={styles.value}>Gunpo, Gyeonggi-do</span>
                                </li>
                                <li>
                                    <span className={styles.title}>E-mail</span>
                                    <span className={styles.value}>1876070677@shbox.shop</span>
                                </li>
                                <li>
                                    <span className={styles.title}>Phone</span>
                                    <span className={styles.value}>010-2138-1559</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.white_space}></div>
                <div className={styles.row}>
                    <div className={styles.activity}>
                        <div className={styles.block_title}>
                            <h3>Experience</h3>
                        </div>
                        <div className={styles.timeline}>
                        {act.map(data => {
                            return (
                                <div className={styles.timeline_item} key={data.name}>
                                    <div className={styles.left_part}>
                                        <h5 className={styles.item_periond}>{data.start} - {data.end}</h5>
                                        <span className={styles.item_componey}>{data.componey}</span>
                                    </div>
                                    <div className={styles.divider}></div>
                                    <div className={styles.right_part}>
                                        <h4 className={styles.item_title}>{data.name}</h4>
                                        <p>
                                            {data.content}
                                            <br />
                                            {data.tech}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.block_title}>
                            <h3>My Skills..</h3>
                        </div>
                        <ul className={styles.knowledges}>
                            <li>Python</li><li>C</li><li>Java</li><li>Javascript</li><li>Kotlin</li>
                            <li>HTML</li><li>Node.js</li><li>Mysql</li><li>Spring</li><li>React.js</li>
                            <li>Express</li><li>Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
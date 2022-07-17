import styles from './section3.module.css';
import {useSelector} from 'react-redux';

function Portfolio () {
    const page = useSelector(state => {
        return state.animate.pageIdx;
    })

    const prev = useSelector(state => {
        return state.animate.prevPage;
    })

    const effect = useSelector(state => {
        return state.animate.effectNum;
    })
    return (
      <section className={`${styles.animated_section} ${page === 2 && `on${effect}`} ${page !== 2 && prev === 2 && `off${effect}`} ${page !== 2 && prev !== 2 && `disable`}`}>
        <div className={styles.section_content}>
            <div className={styles.page_title}>
              <h2>Portfolio</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.portfolio_content}>
                  <figure className={styles.item}>
                    <h4>> <span>Sleep Dog</span> - 반려견의 상태를 확인하자!</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>Python Study</span> - Python을 이용하여 백준 문제 풀기(2021)</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>무야호</span> - Java 1 : N 음성 대화 애플리케이션</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>SELab</span> - Java Servlet Web MSA 식별</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>집단지성</span> - 1인가구를 위한 식료품 공동구매 플랫폼</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>Python Study</span> - Python을 이용하여 백준 문제 풀기(2022)</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>SELab</span> - Java Servlet Filter를 이용하여 View Component 관계 식별</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>MOOD</span> - 리뷰데이터를 이용하여 사용자 취향에 따른 숙박업소 추천 알고리즘</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>개인프로젝트</span> - React를 활용한 네이버 로그인 페이지 클론코딩 + Node.js를 활용한 jwt 토큰 인증 로그인 구현</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>개인프로젝트</span> - React를 활용하여 포트폴리오 템플릿 비슷하게 따라 만들기</h4>
                  </figure>
                  <figure className={styles.item}>
                    <h4>> <span>SELab</span> - 기존의 MSA 식별 기법에서 검출되지 않은 컴포넌트들에 대하여 마이크로 서비스 식별</h4>
                  </figure>
                </div>
              </div>
            </div>
        </div>
      </section>  
    )
}

export default Portfolio;
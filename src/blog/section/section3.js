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
            
        </div>
      </section>  
    )
}

export default Portfolio;
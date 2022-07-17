import React from "react";
import styles from './arrownav.module.css';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {useSelector, useDispatch} from 'react-redux';
import {increasePg, decreasePg, setPrevPage, setEffectNum} from '../../store/animate';

function ArrowNav() {

    const dispatch = useDispatch();
    const page = useSelector(state => {
        return state.animate.pageIdx;
    })

    return (
        <div className={`${styles.arrow_nav}`}>
            <div className={styles.arrow_right} onClick={() => {
                dispatch(setEffectNum());
                dispatch(setPrevPage(page));
                dispatch(increasePg());
            }}>
                <AiOutlineArrowRight />
            </div>
            <div className={styles.arrow_left} onClick={() => {
                dispatch(setEffectNum());
                dispatch(setPrevPage(page));
                dispatch(decreasePg());
            }}>
                <AiOutlineArrowLeft />
            </div>
        </div>
    )
}

export default ArrowNav;
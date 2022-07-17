import React from "react";
import styles from './toggle.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setToggle} from '../../store/animate';

function Toggle() {
    const dispatch = useDispatch();
    const tg = useSelector(state => {
        return state.animate.toggle;
    })

    return (
        <div className={`${styles.menu_toggle} ${tg && styles.open}`} onClick={() => dispatch(setToggle())}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Toggle;
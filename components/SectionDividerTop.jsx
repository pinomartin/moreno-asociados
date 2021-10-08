import React from 'react'
import styles from "../styles/Home.module.css";


export const SectionDividerTop = ({ colorNoRadius, backgroundColor = 'rgb(28, 34, 37)' }) => {
    return (
        <>
          <section className={styles.curvedTop} style={colorNoRadius? {background: backgroundColor, borderTopRightRadius: 0, borderTopLeftRadius: 0} : {}}></section>  
        </>
    )
}

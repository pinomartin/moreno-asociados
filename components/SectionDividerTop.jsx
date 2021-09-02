import React from 'react'
import styles from "../styles/Home.module.css";


export const SectionDividerTop = ({ colorNoRadius }) => {
    return (
        <>
          <section className={styles.curvedTop} style={colorNoRadius? {background:'rgb(28, 34, 37)', borderTopRightRadius: 0, borderTopLeftRadius: 0} : {}}></section>  
        </>
    )
}

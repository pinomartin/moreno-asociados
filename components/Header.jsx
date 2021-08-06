import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Logo from '../public/logoHeader.svg'
import styles from '../styles/Home.module.css'

export const Header = () => {
    return (
        <>
        <Jumbotron className={styles.jumboCustom}>
            <header>
                <h1>L. Felipe Moreno & Asociados</h1>
                <h2>Contadores Públicos</h2>
                <a href="#servicios"><Logo className={styles.logo}/></a>
            </header>
        </Jumbotron>
        </>
    )
}


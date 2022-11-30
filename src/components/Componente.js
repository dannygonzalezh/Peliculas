import React from 'react';
import MoviesGrid from './MoviesGrid';
import styles from './Componente.module.css';

function Componente() {

    return (
        <div>
           <header>
            <h1 className={styles.title}>Movies</h1>
            </header> 
                
            <main className={styles.main}>
            <MoviesGrid />
            </main>
        </div>
    )
}

export default Componente;
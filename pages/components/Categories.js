import React from 'react';
import Link from 'next/link'
import styles from '../../styles/Categories.module.css'

const Categories = () => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>All Categories</button>
            <div className={styles.content}>
                <Link href='/barbecue'><a>Barbecue</a></Link>
                <Link href='/burger'><a>Burger</a></Link>
                <Link href='/pizza'><a>Pizza</a></Link>
                <Link href='/sandwich'><a>Sandwich</a></Link>
                <Link href='/sushi'><a>Sushi</a></Link>
                <Link href='/tacos'><a>Tacos</a></Link>
            </div>
        </div>
    )
}

export default Categories

import styles from '../../styles/Navbar.module.css'
import React from 'react'
import Link from 'next/link'

const NavbarMain = () =>{
    return(
        <>
        {/* Main Navigation Bar */}
            <div className={styles.main}>
                <nav className={styles.navbar}>
                    <Link href='/'><a className={styles.logo}>D'MEAL</a></Link>
                    <div className={styles.links}>
                        <Link href='/help'><a className={styles.link} >HELP</a></Link>
                        <Link href='/login'><a className={styles.link}>LOGIN/SIGN UP</a></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavbarMain
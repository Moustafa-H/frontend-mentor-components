import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import NavButton from '../NavButton/NavButton'

const Navbar = () => {
  return (
    <header className={ styles.header }>
        <Link href='/intro-section-with-dropdown-navigation'><Image
            src='./intro-section-with-dropdown-navigation/logo.svg'
            alt='Logo'
            width={84}
            height={27}
            className={ styles.logoImg }
        /></Link>
        <ul className={ styles.ul }>
            <li><NavButton text='Features' /></li>
            <li><NavButton text='Company' /></li>
            <li><Link href='/intro-section-with-dropdown-navigation' className={ styles.a }>Careers</Link></li>
            <li><Link href='/intro-section-with-dropdown-navigation' className={ styles.a }>About</Link></li>
        </ul>
        <div className={ styles.buttonDiv }>
          <Link href='/intro-section-with-dropdown-navigation'><button className={ styles.button }>Login</button></Link>
          <Link href='/intro-section-with-dropdown-navigation'><button className={ `${styles.button} ${styles.buttonBorder}` }>Register</button></Link>
        </div>
    </header>
  )
}

export default Navbar
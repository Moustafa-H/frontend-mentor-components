import styles from './NavbarItems.module.css'
import Link from 'next/link'
import NavButton from '../NavButton/NavButton'

const NavbarItems = ({style}: {style: string}) => {
  return (
    <>
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
    </>
  )
}

export default NavbarItems
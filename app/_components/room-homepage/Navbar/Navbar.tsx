import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className={ styles.header }>
        <Link href='./room-homepage'><Image
            src='./room-homepage/logo.svg'
            alt='home'
            width={62}
            height={14}
        /></Link>
        <ul className={ styles.ul }>
            <li><Link href='/room-homepage'>home</Link></li>
            <li><Link href='/room-homepage'>shop</Link></li>
            <li><Link href='/room-homepage'>about</Link></li>
            <li><Link href='/room-homepage'>contact</Link></li>
        </ul>
    </header>
  )
}

export default Navbar
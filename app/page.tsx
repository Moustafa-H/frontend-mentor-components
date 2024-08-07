import Link from 'next/link'
import styles from './home.module.css'

 const Home = () => {
  return (
    <main className={ styles.main }>
      <h1 className={ styles.h1 }>Completed Challenges:</h1>
      <ul className={ styles.ul }>
        <li className={ styles.li }><Link href='/qr-code'>QR Code Component</Link></li>
        <li className={ styles.li }><Link href='/nft-preview-card'>NFT Preview Card Component</Link></li>
        <li className={ styles.li }><Link href='/product-preview-card'>Product Preview Card Component</Link></li>
        <li className={ styles.li }><Link href='/intro-section-with-dropdown-navigation'>Intro Section with Dropdown Navigation</Link></li>
        <li className={ styles.li }><Link href='/todo-app'>Todo App</Link></li>
        <li className={ styles.li }><Link href='/room-homepage'>Room Home Page</Link></li>
        <li className={ styles.li }><Link href='/ip-address-tracker'>IP Address Tracker</Link></li>
      </ul>
    </main>
  )
}

export default Home
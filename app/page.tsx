import Link from 'next/link'
import styles from './home.module.css'

 const Home = () => {
  return (
    <main className={ styles.main }>
      <h1 className={ styles.h1 }>Available routes:</h1>
      <ul className={ styles.ul }>
        <li className={ styles.li }><Link href='/product-preview-card'>Product Preview Card Component</Link></li>
        <li className={ styles.li }><Link href='/intro-section-with-dropdown-navigation'>Intro Section With Dropdown Navigation</Link></li>
        <li className={ styles.li }><Link href='/todo-app'>Todo App</Link></li>
      </ul>
    </main>
  )
}

export default Home
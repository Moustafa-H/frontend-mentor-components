import Image from 'next/image'
import styles from './intro-section-with-dropdown-navigation.module.css'
import HomeButton from '../_components/HomeButton/HomeButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Intro Section With Dropdown Navigation',
}

const IntroSectionWithDropdownNavigation = () => {
  return (
    <main className={ styles.main }>
        <HomeButton />
    </main>
  )
}

export default IntroSectionWithDropdownNavigation
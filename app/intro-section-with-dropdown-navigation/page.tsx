import Image from 'next/image'
import styles from './intro-section-with-dropdown-navigation.module.css'
import HomeButton from '../_components/HomeButton/HomeButton'
import type { Metadata } from 'next'
import Navbar from '../_components/intro-section-with-dropdown-navigation/Navbar/Navbar'

export const metadata: Metadata = {
    title: 'Intro Section With Dropdown Navigation',
}

const IntroSectionWithDropdownNavigation = () => {
  return (
    <main className={ styles.main }>
        {/* <HomeButton /> */}
        <Navbar />
        <section className={ styles.section }>
          <div className={ styles.textDiv }>
            <h1 className={ styles.ctaTitle }></h1>
            <p className={ styles.ctaParagraph }></p>
            <button className={ styles.ctaButton }></button>
            <div className={ styles.sponsors }></div>
          </div>
          <div>
            <Image
              src='./intro-section-with-dropdown-navigation/image-hero-desktop.png'
              alt='Hero'
              width={960}
              height={1280}
              className={ styles.heroDesktop }
            />
            <Image
              src='./intro-section-with-dropdown-navigation/image-hero-mobile.png'
              alt='Hero'
              width={750}
              height={564}
              className={ styles.heroMobile }
            />
          </div>
        </section>
    </main>
  )
}

export default IntroSectionWithDropdownNavigation
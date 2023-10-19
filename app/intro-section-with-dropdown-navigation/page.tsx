import Image from 'next/image'
import styles from './intro-section-with-dropdown-navigation.module.css'
import HomeButton from '../_components/HomeButton/HomeButton'
import type { Metadata } from 'next'
import Navbar from '../_components/intro-section-with-dropdown-navigation/Navbar/Navbar'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Intro Section With Dropdown Navigation',
}

const IntroSectionWithDropdownNavigation = () => {
  return (
    <main className={ styles.main }>
        <HomeButton />
        <Navbar />
        <section className={ styles.section }>
          <div className={ styles.textDiv }>
            <h1 className={ styles.ctaTitle }>Make remote work</h1>
            <p className={ styles.ctaParagraph }>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <Link href='/intro-section-with-dropdown-navigation'><button className={ styles.ctaButton }>Learn more</button></Link>
            <div className={ styles.sponsors }>
              <Image
                src='./intro-section-with-dropdown-navigation/client-databiz.svg'
                alt='databiz'
                width={114}
                height={20}
              />
              <Image
                src='./intro-section-with-dropdown-navigation/client-audiophile.svg'
                alt='audiophile'
                width={73}
                height={36}
              />
              <Image
                src='./intro-section-with-dropdown-navigation/client-meet.svg'
                alt='meet'
                width={90}
                height={20}
              />
              <Image
                src='./intro-section-with-dropdown-navigation/client-maker.svg'
                alt='maker'
                width={83}
                height={24}
              />
            </div>
          </div>
          <div className={ styles.heroDiv }>
            <Image
              src='./intro-section-with-dropdown-navigation/image-hero-desktop.png'
              alt='Hero'
              width={960/2}
              height={1280/2}
              className={ styles.heroDesktop }
            />
            <Image
              src='./intro-section-with-dropdown-navigation/image-hero-mobile.png'
              alt='Hero'
              width={750/2}
              height={564/2}
              className={ styles.heroMobile }
            />
          </div>
        </section>
    </main>
  )
}

export default IntroSectionWithDropdownNavigation
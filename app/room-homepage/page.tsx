import Image from 'next/image'
import styles from './room-homepage.module.css'
import TopSection from '../_components/room-homepage/TopSection/TopSection'
import Navbar from '../_components/room-homepage/Navbar/Navbar'

const bottomSectionTitle = 'About our furniture'
const bottomSectionText = 'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive them that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.'

const RoomHomepage = () => {
  return (
    <main className={ styles.main }>
        <Navbar />
        <TopSection />
        <section className={ styles.bottomSection }>
            <Image
                src='./room-homepage/image-about-dark.jpg'
                alt='hero 2'
                width={420}
                height={266}
                className={ styles.aboutImage }
            />
            <div className={ styles.bottomSectionDiv }>
                <h2 className={ styles.bottomSectionTitle }>{bottomSectionTitle}</h2>
                <p className={ styles.p }>{bottomSectionText}</p>
            </div>
            <Image
                src='./room-homepage/image-about-light.jpg'
                alt='hero 3'
                width={440}
                height={266}
                className={ styles.aboutImage }
            />
        </section>
    </main>
  )
}

export default RoomHomepage
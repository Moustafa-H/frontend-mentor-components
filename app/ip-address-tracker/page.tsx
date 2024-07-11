import Image from 'next/image'
import styles from './ip-address-tracker.module.css'

const IPAdressTracker = () => {
  return (
    <main className={ styles.main }>
        <Image
            src='./ip-address-tracker/pattern-bg-desktop.png'
            alt=''
            width={1440}
            height={280}
            className={ styles.desktopImage }
        />
        <Image
            src='./ip-address-tracker/pattern-bg-mobile.png'
            alt=''
            width={375}
            height={300}
            className={ styles.mobileImage }
        />
        <div className={ styles.map }></div>

        <section className={ styles.section }>
            <h1 className={ styles.h1 }>IP Address Tracker</h1>
            <div className={ styles.inputDiv }>
                <input
                    
                />
            </div>
            <div className={ styles.infoDiv }></div>
        </section>
    </main>
  )
}

export default IPAdressTracker
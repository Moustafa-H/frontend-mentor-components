'use client'

import { useState } from 'react'
import styles from './TopSection.module.css'
import Image from 'next/image'

const topSectionText = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
const topSectionTitle = 'Discover innovative ways to decorate'

const TopSection = () => {
    const [index, setIndex] = useState(0)

    const incrementIndex = () => {
        if (index < 2) {
            setIndex(index + 1)
        }
    }

    const decrementIndex = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    
    return (
        <section className={ styles.topSection }>
            <section className={ styles.imageSection }>
                <Image
                    src={'./room-homepage/desktop-image-hero-1.jpg'}
                    alt='hero 1'
                    width={840}
                    height={534}
                    className={ styles.desktopImage }
                />
                <Image
                    src={'./room-homepage/mobile-image-hero-1.jpg'}
                    alt='hero 1'
                    width={375}
                    height={360}
                    className={ styles.mobileImage }
                />
                <div className={ styles.buttonDiv }>
                    <button onClick={decrementIndex} className={ styles.button }>
                        <Image
                            src='./room-homepage/icon-angle-left.svg'
                            alt='previous'
                            width={14}
                            height={24}
                        />
                    </button>
                    <button onClick={incrementIndex} className={ styles.button }>
                        <Image
                            src='./room-homepage/icon-angle-right.svg'
                            alt='next'
                            width={14}
                            height={24}
                        />
                    </button>
                </div>
            </section>
            <div className={ styles.topSectionDiv }>
                <h1 className={ styles.topSectionTitle }>{topSectionTitle}</h1>
                <p className={ styles.p }>{topSectionText}</p>
                <button className={ styles.ctaButton }>
                    Shop Now
                    <Image
                        src='./room-homepage/icon-arrow.svg'
                        alt=''
                        width={40}
                        height={12}
                    />
                </button>
            </div>
        </section>
    )
}

export default TopSection
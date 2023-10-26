'use client'

import { useEffect, useState } from 'react'
import styles from './TopSection.module.css'
import Image from 'next/image'

const titles = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials',
]

const texts = [
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locater. Any questions? Don't hesitate to contact us today.",
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consisten as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
]

const TopSection = () => {
    const [index, setIndex] = useState(1)
    const [imageDir, setImageDir] = useState('./room-homepage/desktop-image-hero-1.jpg')
    const [topSectionTitle, setTopSectionTitle] = useState(titles[0])
    const [topSectionText, setTopSectionText] = useState(texts[0])

    useEffect(() => {
        setImageDir('./room-homepage/desktop-image-hero-' + index + '.jpg')
        setTopSectionTitle(titles[index-1])
        setTopSectionText(texts[index-1])
    }, [index])

    const incrementIndex = () => {
        if (index < 3) {
            setIndex(index + 1)
        }
    }

    const decrementIndex = () => {
        if (index > 1) {
            setIndex(index - 1)
        }
    }
    
    return (
        <section className={ styles.topSection }>
            <section className={ styles.imageSection }>
                <Image
                    src={imageDir}
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
                        className={ styles.ctaButtonImage }
                    />
                </button>
            </div>
        </section>
    )
}

export default TopSection
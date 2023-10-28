'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './TopSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
    const [mobileNav, setMobileNav] = useState(false)

    let mobileNavRef: React.RefObject<HTMLDivElement> = useRef(null)

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (mobileNav && !mobileNavRef.current?.contains(event.target as Node)) {
                setMobileNav(false)
            }
        }

        window.addEventListener("mousedown", handleOutSideClick)

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick)
        }
    }, [mobileNavRef, mobileNav])
    
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

    const handleMenuClick = () => {
        setMobileNav(!mobileNav)
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
                    src='./room-homepage/mobile-image-hero-1.jpg'
                    alt='hero 1'
                    width={375}
                    height={360}
                    className={
                        index===1?`${styles.mobileImage} ${styles.middleImage}`:
                            index===2?`${styles.mobileImage} ${styles.leftImage}`:
                                `${styles.mobileImage} ${styles.hideImageLeft}`
                    }
                />
                <Image
                    src='./room-homepage/mobile-image-hero-2.jpg'
                    alt='hero 1'
                    width={375}
                    height={360}
                    className={
                        index===2?`${styles.mobileImage} ${styles.middleImage}`:
                            index===1?`${styles.mobileImage} ${styles.rightImage}`:
                                `${styles.mobileImage} ${styles.leftImage}`
                    }
                />
                <Image
                    src='./room-homepage/mobile-image-hero-3.jpg'
                    alt='hero 1'
                    width={375}
                    height={360}
                    className={
                        index===3?`${styles.mobileImage} ${styles.middleImage}`:
                            index===2?`${styles.mobileImage} ${styles.rightImage}`:
                                `${styles.mobileImage} ${styles.hideImageRight}`
                    }
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
            <button onClick={handleMenuClick} className={ mobileNav?`${styles.menuButton} ${styles.menuButtonActive}`:styles.menuButton }>
                {mobileNav?
                    <Image
                        src='./room-homepage/icon-close.svg'
                        alt='close menu'
                        width={16}
                        height={16}
                    />
                :
                    <Image
                        src='./room-homepage/icon-hamburger.svg'
                        alt='menu'
                        width={20}
                        height={14}
                    />
                }
            </button>
            <div ref={mobileNavRef} className={ mobileNav?`${styles.mobileNav} ${styles.active}`:styles.mobileNav }>
                <ul className={ mobileNav?`${styles.mobileNavList} ${styles.active}`:styles.mobileNavList }>
                    <li className={ styles.li }><Link href='/room-homepage'>home</Link></li>
                    <li className={ styles.li }><Link href='/room-homepage'>shop</Link></li>
                    <li className={ styles.li }><Link href='/room-homepage'>about</Link></li>
                    <li className={ styles.li }><Link href='/room-homepage'>contact</Link></li>
                </ul>
            </div>
            <div className={ mobileNav?`${styles.darkBg} ${styles.active}`:styles.darkBg }></div>
        </section>
    )
}

export default TopSection
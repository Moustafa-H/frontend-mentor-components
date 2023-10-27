import Image from 'next/image'
import styles from './nft-preview-card.module.css'
import HomeButton from '../_components/HomeButton/HomeButton'
import Link from 'next/link'

const NFTPreviewCard = () => {
  return (
    <main className={ styles.main }>
      <HomeButton />
      <section className={ styles.section }>
        <div className={ styles.pImageDiv }>
          <Image
            src='./nft-preview-card/image-equilibrium.jpg'
            alt='pew pew'
            width={280}
            height={280}
            className={ styles.pImage }
            priority={true}
          />
        </div>
        <h1 className={ styles.h1 }><Link href='/nft-preview-card'>Equilibrium #3429</Link></h1>
        <p className={ styles.p }>Our Equilibrium collection promotes balance and calm.</p>
        <div className={ styles.infoContainer }>
          <div className={ styles.infoDiv }>
            <Image
              src='./nft-preview-card/icon-ethereum.svg'
              alt='pew pew'
              width={11}
              height={18}
            />
            <p className={ styles.price }>0.041 ETH</p>
          </div>
          <div className={ styles.infoDiv }>
            <Image
              src='./nft-preview-card/icon-clock.svg'
              alt='pew pew'
              width={17}
              height={17}
            />
            <p className={ styles.time }>3 Days Left</p>
         </div>
        </div>
        <hr className={ styles.hr } />
        <div className={ styles.bottomDiv }>
          <Image
            src='./nft-preview-card/image-avatar.png'
            alt='pew pew'
            width={30}
            height={30}
          />
          <p className={ styles.bottomText }>Creation of <span className={ styles.spanText }><Link href='/nft-preview-card'>Jules Wyvern</Link></span></p>
        </div>
      </section>
    </main>
  )
}

export default NFTPreviewCard
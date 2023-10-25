import Image from 'next/image'
import styles from './nft-preview-card.module.css'

const NFTPreviewCard = () => {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <Image
          src='./nft-preview-card/image-equilibrium.jpg'
          alt='pew pew'
          width={280}
          height={280}
          className={styles.pImage}
          
     />
      <Image
          src='./nft-preview-card/icon-view.svg'
          alt='pew pew'
          width={48}
          height={48}
          className={styles.viewImage}
          
     />
      <h1 className={styles.h1}>Equilibrium #3429</h1>
      <p className={styles.p}>Our Equilibrium collection promotes blanace and calm.</p>
      <div className={styles.infoDiv}>
        <div className={styles.gay}>
            <Image
            src='./nft-preview-card/icon-ethereum.svg'
            alt='pew pew'
            width={11}
            height={18}
          />
            <p className={styles.price}>0.041 ETH</p>
        </div>
       <div className={styles.gay}>
      <Image
          src='./nft-preview-card/icon-clock.svg'
          alt='pew pew'
          width={17}
          height={17}
     />
      <p className={styles.time}>3 Days Left</p>
         </div>
      </div>
      <hr className={styles.line}/>
      <div className={styles.bottomDiv}>
      <Image
          src='./nft-preview-card/image-avatar.png'
          alt='pew pew'
          width={30}
          height={30}
     />
        <p className={styles.c1}>Creation of <span className={styles.ay7aga}>Jules Wyvern</span></p>
      </div>
      </div>
    </main>
  )
}

export default NFTPreviewCard
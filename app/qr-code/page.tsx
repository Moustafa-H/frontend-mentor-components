import Image from 'next/image'
import styles from './qr-code.module.css'

const QRCode = () => {
  return (
    <main className={ styles.main }>
        <div className={ styles.div }>
            <Image
                src='./qr-code/image-qr-code.png'
                alt='QR Code'
                width={310}
                height={310}
                className={ styles.image }
            />
            <h1 className={ styles.h1 }>Improve your front-end skills by bulding projects</h1>
            <p className={ styles.p }>scan the QR code to visit frontend mentor and take your coding skills to the next level</p>
        </div>
    </main>
  )
}

export default QRCode
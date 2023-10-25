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
<<<<<<< HEAD
            <p className={ styles.p }>scan the QR code to visit frontend mentor and take your coding skills to the next level</p>
=======
            <p className={ styles.p }>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
>>>>>>> ab7e7808f3baa1e69aeb297387272cbf870a8ef7
        </div>
    </main>
  )
}

export default QRCode
import Image from 'next/image'
import styles from './qr-code.module.css'

const QRCode = () => {
  return (
    <main className={ styles.main }>
        <div className={ styles.div }>
            <Image
                src='./qr-code/image-qr-code.png'
                alt='QR Code'
                width={576/2}
                height={576/2}
            />
            <h1 className={ styles.h1 }></h1>
            <p className={ styles.p }></p>
        </div>
    </main>
  )
}

export default QRCode
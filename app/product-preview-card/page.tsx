import Image from 'next/image'
import styles from './product-preview-card.module.css'
import HomeButton from '../_components/HomeButton/HomeButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Preview Card',
}

 const ProductPreviewCard = () => {
  return (
    <main className={ styles.main }>
        <HomeButton />
        <div className={ styles.card }>
            <Image
                src='/product-preview-card/image-product-desktop.jpg'
                alt='product image'
                width={300}
                height={450}
                className={ styles.imageDesktop }
            />
            <Image
                src='/product-preview-card/image-product-desktop.jpg'
                alt='product image'
                width={343}
                height={240}
                className={ styles.imageMobile }
            />
            <section className={ styles.section }>
                <p className={ styles.p1 }>Perfume</p>
                <h2 className={ styles.title }>Gabrielle Essence Eau De Parfum</h2>
                <p className={ styles.description }>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className={ styles.priceDiv }>
                <h1 className={ styles.newPrice }>$149.99</h1>
                <p className={ styles.oldPrice }>$169.99</p>
                </div>
                <button className={ styles.button }>
                    <Image
                        src='/product-preview-card/icon-cart.svg'
                        alt=''
                        width={15}
                        height={16}
                    />
                    Add to Cart
                </button>
            </section>
        </div>
    </main>
  )
}

export default ProductPreviewCard
'use client'

import styles from './ip-address-tracker.module.css'
import HomeButton from '@/app/_components/HomeButton/HomeButton'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] })

interface dataType {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  isp: string;
}

const IpAddressTracker = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [data, setData] = useState<dataType>()
  const [ipAddress, setIpAddress] = useState('')

  const getData = async () => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_jnLl88Sn3OHngfJT2K2MGFcRpA9KA&ipAddress=${ipAddress}`)
      return await response.json()
    } catch (error) {
      console.log('error:', error)
    }
  }
  
  useEffect(() => {
    const func = async () => {
      setData(await getData())
    }
    func()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setData(await getData())
  }

  return (
    <main className={ `${rubik.className} ${styles.main}` }>
      <HomeButton />
      <section className={ styles.bgSection }>
        {isMobile?<Image
          src='/ip-address-tracker/pattern-bg-mobile.png'
          alt='pattern bg'
          width={375}
          height={300}
          className={ styles.bg }
        />:<Image
          src='/ip-address-tracker/pattern-bg-desktop.png'
          alt='pattern bg'
          width={1440}
          height={280}
          className={ styles.bg }
        />}
      </section>
      <h1>IP Address Tracker</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={ styles.form }>
        <input
          type='text'
          value={ipAddress}
          onChange={(c) => setIpAddress(c.currentTarget.value)}
          placeholder='Search for any IP address or domain'
          className={ styles.input }
        />
        <button className={ styles.submitBtn }>
          <Image
            src='/ip-address-tracker/icon-arrow.svg'
            alt='submit'
            width={11}
            height={14}
          />
        </button>
      </form>
      <div className={ styles.infoDiv }>
        <div><h3>IP Address</h3><h2>{data?.ip}</h2></div>
        <hr style={{ height: '70%', color: 'black' }} />
        <div><h3>Location</h3><h2>{data?.location.region},&nbsp;{data?.location.country}</h2></div>
        <hr style={{ height: '70%', color: 'black' }} />
        <div><h3>Timezone</h3><h2>UTC&nbsp;{data?.location.timezone}</h2></div>
        <hr style={{ height: '70%', color: 'black' }} />
        <div><h3>ISP</h3><h2>{data?.isp}</h2></div>
      </div>
    </main>
  )
}

export default IpAddressTracker
'use client'
import React from 'react'
// import Styles from './loader.module.css'
import './loader.css'
import Image from 'next/image'

const Loader = () => {
  return (
    // <div className={ Styles.mask} >
    <>
    <div className='mask' >
    </div>
      {/* <Image src="/loader.gif" width={150} height={150} alt="Loading..."/> */}
      <Image src="/loader5.gif" width={150} height={150} alt="Loading..."/>
    </>
  )
}

export default Loader
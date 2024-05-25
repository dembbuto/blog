import Image from 'next/image'
import React from 'react'
import profileImage from '../../public/images/profile.jpg'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='profile image'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Jaesik"}</h2>
      <h3 className='text-xl font-semibold'>Frontend Developer</h3>
      <p>골프존 모바일개발실 서비스개발팀</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact me</button>
      </Link>
    </section>
  )
}

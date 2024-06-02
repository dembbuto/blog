import Hero from '@/components/Hero'
import React from 'react'

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 m-2';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          7년차 프론트엔드 개발자
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          골프존 (2021-Now)<br />
          랜드프로 (2017-2021)<br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          Vue.js, React.js, Next.js<br />
          Git<br />
          VS Code
        </p>
      </section>
    </>
  )
}

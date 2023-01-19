import React from 'react'
import styles from "../styles/Project.module.css"


const Project = () => {
  return (
    <div className={`${styles.cardBackground} flex p-4 rounded-md`}>
        <img className="w-[300px]" src="gigsocial.png" alt="gig social" />
        <div className='ml-6 w-full'>
          <div className='flex items-center justify-between mb-2'>
            <h2 className='text-4xl font-bold block'>gigSocial</h2>
            <div className={`${styles.border} flex items-center relative`}>
              <img className='w-[50px] z-10 hover:scale-125 hover:cursor-pointer inline-block' src="github.png" alt="github" />
              <img className='w-[35px] z-10 hover:scale-125 hover:cursor-pointer mr-2 inline-block' src="www.png" alt="live site" />
            </div>
          </div>
        <p className='text-sm font-extralight mb-4'>gigSocial is an app designed to help musicians manage live performances.  It includes a flashing metronome, song lyrics, and community feedback on your setlist choices.</p>
        <p className='text-sm font-extralight w-10/12'><span className='text-blue-500'>React</span> • <span className='text-violet-500'>Express</span> • <span className='text-rose-500'>Node</span> • <span className='text-green-500'>GraphQL</span> • <span className='text-yellow-500'>MongoDB</span> • <span className='text-orange-500'>OAuth 2.0</span> • <span className='text-pink-500'>JSON Web Tokens</span></p>
        </div>
    </div>
  )
}

export default Project
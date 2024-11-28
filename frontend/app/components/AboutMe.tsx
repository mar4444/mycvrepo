import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <section className='w-11/12 lg:w-5/6 m-auto pt-16 lg:pt-24'>
        <div className='flex items-center text-2xl lg:text-5xl font-bold gap-2'>
          <h1 className='text-white'>Hello, I'm</h1>
          <h1 className='text-yellow-500'>Imanirumva</h1>
          <h1 className='text-green-500'>Martin</h1>
        </div>

        <article className='mt-3 lg:w-1/2'>
          <p className='text-allTextColor text-lg lg:mt-3'>A self-taught software developer, I like spending my free time on web development tweaking small projects.</p>
        </article>
        <button className='bg-green-700 hover:bg-green-900 transition duration-300 mt-6 lg:mt-9 py-3 px-4 rounded-3xl font-semibold text-lg text-allTextColor'><a href="/portfoliocv.pdf" download="portfoloicv.pdf">DownLoad My CV</a></button>
        
        <main id='about'  className='mt-12 lg:mt-24 lg:w-3/4 lg:m-auto'>
          <h1 className='text-green-700 text-center text-xl lg:text-2xl font-semibold'>About Me</h1>
          <h1 className='text-allTextColor text-center text-2xl lg:text-4xl mt-2'>How I started & what I do</h1>
          <article className='text-allTextColor mt-6'>
            <p>I started coding out of curiosity, I wanted to figure out how mobile apps and websites work. I like working on software, and feeling a sense of accomplishment when something I made is used by clients or users.</p>
            <ul className='mt-4 list-disc list-inside ml-2'>
              <li>Located in Kigali, Rwanda</li>
              <li>Spoken languages: English, Kinyarwanda</li>
              <li>Open to freelance work</li>
            </ul>
          </article>
        </main>
      </section>
    </div>
  )
}

export default AboutMe
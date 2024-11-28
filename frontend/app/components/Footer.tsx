import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='border border-borderColor bg-bgFooter mt-24 pt-10 pb-2 rounded-t-[60px] grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3'>
        <ul className='flex items-center justify-center lg:items-start flex-col gap-2 text-textColor text-xs lg:text-base py-2 px-4 rounded-lg'>
          <li className='hover:text-white transition duration-300'><a href="">Home</a></li>
          <li className='hover:text-white transition duration-300'><a href="">About Me</a></li>
          <li className='hover:text-white transition duration-300'><a href="">Portfolio</a></li>
          <li className='hover:text-white transition duration-300'><a href="">Contact</a></li>
        </ul>

        <ul className='flex items-center lg:items-start justify-center flex-col gap-2 text-textColor text-xs lg:text-base py-2 px-4 rounded-lg'>
          <h1 className='text-green-700 text-lg lg:text-2xl font-bold'>Contact</h1>
          <li className='hover:text-white transition duration-300'>Kigali, Kicukiro, kk155</li>
          <li className='hover:text-white transition duration-300'>Rwanda</li>
          <li className='hover:text-white transition duration-300'>+250784405041</li>
          <li className='hover:text-white transition duration-300'>manirumva@gmail.com</li>
        </ul>

        <ul className='flex items-center lg:items-start justify-center flex-col gap-2 text-textColor text-xs lg:text-base py-2 px-4 rounded-lg'>
          <h1 className='text-green-700 text-lg lg:text-2xl font-bold'>Socials</h1>
          <li className='hover:text-white transition duration-300'><a href="https://www.linkedin.com/in/imanirumva-martin-b70309266/" target="_blank" rel="noopener noreferrer">LinkeIn</a></li>
          <li className='hover:text-white transition duration-300'><a href="https://github.com/mar4444" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li className='hover:text-white transition duration-300'><a href="https://web.facebook.com/manirumva.martin/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li className='hover:text-white transition duration-300'><a href="https://www.instagram.com/mar_tin1012/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li className='hover:text-white transition duration-300'><a href="https://twitter.com/Musirikare_" target="_blank" rel="noopener noreferrer">X</a></li>
        </ul>

        <article className='flex items-center justify-center flex-col mt-6 lg:col-span-3'>
          <p className='text-allTextColor text-xs'>This is final project. Created by Imanirumva Martin. See you on</p>
          <ul className='font-bold text-base text-allTextColor'>
            <li><a href="https://github.com/mar4444" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </article>
      </footer>
    </div>
  )
}

export default Footer
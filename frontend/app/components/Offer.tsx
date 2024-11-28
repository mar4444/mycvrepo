import React from 'react'

interface Offer {
  id: number;
  src: string;
  title: string;
  desc: string;
}

const offers: Offer[] = [
  { id:1, src: '/images/ando.png', title: "Web Development", desc: 'I am familiar with Laravel, Django, and Nodejs. Get in touch if you need a website' },
  { id:2, src: '/images/chmelogo.png', title: "Consultancy", desc: 'I occasionally do web hosting, article writing, code testing, content creation, etc' },
  { id:3, src: '/images/consi.png', title: "Mobile App", desc: 'I prefer to use Flutter to make mobile apps. It has good support and performance' }
]

const Offer = () => {
  return (
    <div>
      <section className='w-11/12 lg:w-5/6 mt-16 lg:mt-20 m-auto'>
        <h1 className='text-green-700 text-center text-xl lg:text-2xl font-semibold'>Services</h1>
        <h1 className='text-allTextColor text-center text-2xl lg:text-4xl mt-2'>What can I offer</h1>
        <main className='mt-6 w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6'>
          {offers.map((offer) => (
            <div className='border border-borderColor bg-offerBack rounded-xl text-allTextColor py-5 flex items-center justify-center flex-col' key={offer.id}>
              <img src={offer.src} alt='logo' className='w-10 rounded-full'/> 
              <h1 className='text-lg lg:text-xl mt-3 font-bold'>{offer.title}</h1>
              <p className='mt-3 px-4 text-sm lg:text-base'>{offer.desc}</p>
          </div>
          ))}
        </main> 
      </section>
    </div>
  )
}

export default Offer
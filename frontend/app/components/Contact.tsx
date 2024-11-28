import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id='contact' className='border border-borderColor bg-offerBack mt-20 py-8 rounded-t-2xl'>
        <main className='lg:w-1/2 lg:m-auto text-allTextColor flex items-center justify-center flex-col'>
          <h1 className='text-green-700 text-center text-xl lg:text-2xl font-semibold'>Contact Me</h1>
          <p className='pl-4 pt-2 lg:pt-4 lg:w-11/12'>If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it</p>
        </main>

        <main className='lg:lg:w-5/6 mt-5 lg:mt-10 lg:m-auto w-full'>
          <form className='flex items-center justify-center flex-col gap-6 m-auto w-11/12 lg:w-1/2'>
            <input
              className='border border-borderColor w-full rounded-md text-sm py-4 lg:py-6 pl-2 bg-bgInput'
              type="text"
              id="text"
              name="name"
              placeholder='Enter your names'
            />
            <input
              className='border border-borderColor w-full rounded-md text-sm py-4 lg:py-6 pl-2 bg-bgInput'
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email'
            />

            <div className='w-full'>
              <textarea 
                className='border border-borderColor w-full rounded-md text-sm pl-2 pt-4 pb-12 lg:pb-14 bg-bgInput' 
                placeholder='Write your message here'
              ></textarea>
            </div>
            <button className='bg-green-700 hover:bg-green-900 transition duration-300 text-white py-2 lg:py-3 px-8 text-sm rounded-md'>Submit</button>
          </form>
        </main>
      </section>
    </div>
  )
}

export default Contact
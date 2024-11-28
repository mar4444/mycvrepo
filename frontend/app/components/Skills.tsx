import React from 'react'

interface Skills {
  id: number;
  src: string;
  title: string;
  details: string;
}

const skills: Skills[] = [
  { id:1, src: '/images/html.png', title: "HTML", details: 'I have a strong command of HTML (HyperText Markup Language), which forms the backbone of any web application. I use HTML to create well-structured, semantic, and accessible web content that adheres to modern web standards.' },
  { id:2, src: '/images/tailwind.png', title: "TAILWIND", details: 'I am proficient in using Tailwind CSS, a utility-first CSS framework, to efficiently design responsive and modern user interfaces. With Tailwind, I build clean, scalable, and reusable styles without writing custom CSS from scratch. I leverage its powerful utility classes to create pixel-perfect layouts, implement consistent theming, and improve development speed.' },
  { id:3, src: '/images/react.png', title: "REACT JS", details: 'I excel in React JS, a powerful JavaScript library for building dynamic and interactive user interfaces. I use React’s component-based architecture to create reusable UI elements, manage application state with tools like React Context and Redux, and handle asynchronous data fetching with libraries such as Axios or React Query.' },
  { id:4, src: '/images/node.png', title: "NODE JS", details: 'I have extensive experience working with Node.js, a runtime environment for building fast and scalable server-side applications. I use Node.js to create RESTful APIs, handle real-time communication via WebSockets, and perform server-side logic efficiently. I am skilled in using popular Node.js frameworks like Express.js for rapid application development and have experience working with databases (e.g., MongoDB, MySQL) to manage backend data storage and retrieval securely.' }
]

const Skills = () => {
  return (
    <div>
      <main className='lg:w-5/6 w-11/12 m-auto pt-20'>
        <section className='flex items-center justify-center flex-col gap-3 lg:pb-12'>
          <h1 className='text-green-700 text-2xl font-semibold'>My Skills</h1>
          <h1 className='text-allTextColor text-3xl'>4+ years of experience</h1>
        </section>

        <section className='text-allTextColor grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-2'>
          {skills.map((skill) => (
            <article className='bg-skillsBack rounded-tr-3xl flex items-center justify-center flex-col mt-6 lg:mt-0 lg:h-full py-8' key={skill.id}>
              <img src={skill.src} alt='logo' className='w-10 rounded-full'/> 
              <h1 className='text-green-700 mt-1 font-bold'>{skill.title}</h1>
              <p className='text-sm px-3 mt-6 lg:leading-loose'>{skill.details}</p>
          </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Skills
import React from 'react'

const Hero = () => {
  return (
    <section id="home" className='w-full flex xl:flex-row flex-col
    justify-center min-h-screen gap-10 max-container'>
        
        <div className='flex flex-col justify-center gap-6'>
            <h1 className='text-4xl font-bold text-slate-gray'>
            Welcome to <span className='text-primary'>Ecommerce</span>
            </h1>
            <p className='text-lg text-slate-gray'>
            Shop for the latest trends in fashion. Choose from a wide range of
            clothing, accessories, and more.
            </p>
            <button className='btn-primary'>Shop Now</button>
        </div>
      
    </section>
  )
}

export default Hero

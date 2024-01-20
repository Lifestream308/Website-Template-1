import React from 'react'
import BGColorSectionComponent from './BGColorSectionComponent'

export default function MainSectionsComponent() {
  return (
    <>
      <div className='mt-8 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <section className='relative w-full h-auto'>
              <img className='w-full h-auto' src="images/wix1.webp" alt="Picture of a classroom" />
              <div className='absolute inset-0 bg-black opacity-20'></div>
              <h2 className='absolute w-4/5 font-bold text-center text-white text-2xl leading-tight top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-5xl lg:text-7xl'>Welcome to Learning Time Adventures Daycare</h2>
            </section>
            <section className='flex flex-col gap-6 md:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 md:w-1/2 md:py-4'>
                <div className='h-full items-center flex text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Our Story</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit sit fugiat, optio aliquid incidunt ea in eum sapiente similique culpa provident molestias obcaecati maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, placeat inventore distinctio molestias, voluptatum repellat fugiat dolores maxime libero ipsam odit in reprehenderit at veritatis?</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover' src="images/wix2.webp" alt="" />
              </div>
            </section>
            <section className='flex flex-col gap-6 md:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200 md:w-1/2 md:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>About Us</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit sit fugiat, optio aliquid incidunt ea in eum sapiente similique culpa provident molestias obcaecati maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, placeat inventore distinctio molestias, voluptatum repellat fugiat dolores maxime libero ipsam odit in reprehenderit at veritatis?</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover' src="images/wix2.webp" alt="" />
              </div>
            </section>
          </main>
      </div>
      <BGColorSectionComponent />
    </>
  )
}
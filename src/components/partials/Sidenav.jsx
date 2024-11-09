import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <>
      <div className='w-[20%] h-screen border-r-2 border-zinc-600 px-8 py-4'>
           <h1 className='text-xl font-bold'>
           <i class="text-[#6556CD] mr-3 ri-tv-fill"></i>
            MovieApp
            </h1>
           <nav className='flex flex-col gap-3 text-zinc-400 text-xl'>
            <h1 className='font-semibold text-zinc-200 mt-8 mb-4'>New Feed</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg px-5 py-2'><i class="mr-2 ri-fire-fill"></i>Trending</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg px-5 py-2'><i class="mr-2 ri-sparkling-2-fill"></i>Popular</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg px-5 py-2'><i class="mr-2 ri-movie-2-fill"></i>Movies</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg px-5 py-2'><i class="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg px-5 py-2'><i class="mr-2 ri-team-fill"></i>People</Link>
           </nav>
           <hr className='mt-3 border-[1px] border-zinc-400' />
           <nav className='flex flex-col gap-2 text-zinc-400 text-'>
            <h1 className='font-semibold text-zinc-200 mt-4 mb-2'>Web Info</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg px-5 py-2'><i class="mr-2 ri-information-2-fill"></i>About Us</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg px-5 py-2'><i class="mr-2 ri-phone-fill"></i>Contact Us</Link>
            
           </nav>
      </div>
    </>
  )
}

export default Sidenav

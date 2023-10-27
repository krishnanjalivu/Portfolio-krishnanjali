import React from 'react'
import Image from 'next/image'

const IconSkills = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-[40px] flex gap-4 sm:flex-row items-center justify-between">
       <Image src="/images/html-5.png" width={40} height={40} className='animate-pulse' />
       <Image src="/images/css.png" width={40} height={40} className='animate-pulse' />
       <Image src="/images/js.png" width={40} height={40} className='animate-pulse' />
       <Image src="/images/atom.png" width={40} height={40} className='animate-pulse' />
       <Image src="/images/nodejs.png" width={40} height={40} className='animate-pulse' />
      </div>
      </div>
  )
}

export default IconSkills

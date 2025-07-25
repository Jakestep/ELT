import Link from 'next/link'
import React from 'react'

const CTANoHover = () => {
  return (
    <div className={`flex flex-col w-full sm:w-fit sm:flex-row gap-8 items-center justify-center`} >
    <Link
        href="/contact"
        className="bg-accent-600 text-white p-2 rounded-md text-xl h-14 w-50 flex items-center justify-center"
    >
        Start Your Project
    </Link>
    <Link
        href="/about"
        className="bg-accent-400 text-white p-2 rounded-md text-xl h-14 w-50 flex items-center justify-center"
    >
        Who Are We?
    </Link>
    </div>
  )
}

export default CTANoHover
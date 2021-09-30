import React from 'react'
import { HiNewspaper } from 'react-icons/hi'

export default function IconHeading({ children = 'Heading', colorScheme = 'red', icon }) {
  let Icon = HiNewspaper

  switch (icon) {
    case 'newspaper':
      Icon = HiNewspaper
      break

    default:
      break
  }

  return (
    <div className="flex items-center">
      <div
        className={`flex items-center justify-center h-8 w-8 bg-${colorScheme}-50 rounded-full mr-3`}
      >
        <Icon className={`h-5 w-5 text-${colorScheme}-500`} />
      </div>
      <h2 className="text-xl sm:text-2xl sm:leading-none font-semibold tracking-tight text-gray-800 ">
        {children}
      </h2>
    </div>
  )
}

import React from 'react'

export default function SectionHeading({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        {title}
      </h1>
      <p className="w-full flex-none text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  )
}

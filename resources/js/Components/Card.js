import React from 'react'

export default function Card({ children, className }) {
  return (
    <div
      className={`w-full mt-6 p-2 md:p-4 bg-white shadow overflow-hidden rounded sm:rounded-lg ${className}`}
    >
      {children}
    </div>
  )
}

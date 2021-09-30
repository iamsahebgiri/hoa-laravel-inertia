export default function Banner({ title, href }) {
  return (
    <div className="py-2 bg-gradient-to-r from-indigo-600 to-blue-500 overflow-hidden">
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center">
          <div className="text-sm font-medium text-white">{title}</div>
          <span
            aria-hidden="true"
            className="hidden sm:block mx-6 h-6 w-px bg-white bg-opacity-20"
          ></span>
          <div className="ml-6 sm:ml-0">
            <a
              className="whitespace-nowrap inline-flex rounded-md bg-white py-2 px-3 text-xs font-semibold uppercase text-blue-500 hover:bg-opacity-90"
              href={href}
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

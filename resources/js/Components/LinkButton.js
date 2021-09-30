export default function LinkButton({ variant = 'primary', className = '', children, href = '#' }) {
  let variantClassName = 'bg-blue-500 active:bg-blue-500 text-white'

  if (variant === 'secondary') {
    variantClassName = 'bg-white active:bg-white text-gray-700 shadow-sm border border-gray-300'
  }

  return (
    <a
      href={href}
      className={`items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest transition ease-in-out duration-150 ${variantClassName} ${className}`}
    >
      {children}
    </a>
  )
}

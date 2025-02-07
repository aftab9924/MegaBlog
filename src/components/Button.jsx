/* eslint-disable react/prop-types */

function Button({
    children,
    className = '',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    // eslint-disable-next-line no-unused-vars
    type = 'button',
    ...props
}) {
  return (
    <button className= {` px-4 py-2 rounded-lg ${bgColor}
      ${textColor} ${className}
    `} {...props}>
        {children}
    </button>
  )
}

export default Button
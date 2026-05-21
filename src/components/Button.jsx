

export default function Button({children, size, className}) {
  const btnClassName = size ? `btn-${size}` : "btn"
  className = className ? `${btnClassName} ${className}` : btnClassName
  // const toggleStart = toggleStart? toggleStart : null

  return(
    <button className={className}>
        {children}
    </button>
   )
}



const Input = ({id, type, classes, name, children, placeholder}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{children}</label>
      <input 
        type={type} 
        id={id} 
        className={classes} 
        name={name} 
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
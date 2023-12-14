
const Input = ({id, type, classes, name, children, placeholder}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input 
        type={type} 
        id={id} 
        className={classes} 
        name={name} 
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
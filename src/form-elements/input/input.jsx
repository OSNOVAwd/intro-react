
const Input = ({id, type, classes, name, placeholder}) => {
  return (
      <input 
        type={type} 
        id={id} 
        className={classes} 
        name={name} 
        placeholder={placeholder}
      />
  )
}

export default Input
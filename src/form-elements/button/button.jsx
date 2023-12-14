const Button = ({type, classes, children}) => {
  return (
    <button type={type} className={classes}>{children}</button>
  )
}

export default Button
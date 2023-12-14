
const Textarea = ({id, children, rows, cols, placeholder}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <textarea 
        id={id} 
        rows={rows} 
        cols={cols} 
        placeholder={placeholder}
      >
      </textarea>
    </>
  )
}

export default Textarea
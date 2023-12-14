
const Textarea = ({id, children ,rows, cols,placeholder}) => {
  return (
    <div className="textarea">
      <p>{children}</p>
      <textarea 
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      >
      </textarea>
    </div>
  )
}

export default Textarea
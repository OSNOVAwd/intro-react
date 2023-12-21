import React from 'react'

const Slide = ({slideItem}) => {
  return (
    <div className="">
      <img src={slideItem.image} alt="slide image" />
      <h2>{slideItem.title}</h2>
      <p>{slideItem.description}</p>
    </div>
  )
}

export default Slide
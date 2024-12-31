import React from 'react'

const Information = (props) => {
  return (
    <div className="information">
      <li>
        <h2>{props.title}</h2>
        <img src={props.image} alt={props.title} />
        <p>{props.description}</p>
      </li>
    </div>
  )
}

export default Information
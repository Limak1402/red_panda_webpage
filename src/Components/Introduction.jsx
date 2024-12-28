import React from 'react'
import myGif from "../Assets/red-panda.gif"

const Introduction = () => {
  return (
    <div className="introduction">
      <img src={myGif} alt="Mój animowany GIF" />
      <p>
        Welcome to this amazing introduction! This video showcases an adorable red panda reacting to its environment.
        Stay tuned to learn more about their behavior, habitat, and fun facts.
      </p>
      </div>
  )
}

export default Introduction
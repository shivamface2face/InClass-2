import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate(-1);;
    }
  return (
      <div>About
          <br />
          <button onClick={clickHandler}>Move to lab Page</button>
      </div>
  )
}

export default About
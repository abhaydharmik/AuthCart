import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color:"red", textAlign: "center", padding: "1rem"}}>
        <h3>{message}</h3>
    </div>
  )
}

export default ErrorMessage
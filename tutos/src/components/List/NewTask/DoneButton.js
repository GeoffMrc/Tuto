import React from 'react'

const btnStyle = {
  color: 'white',
  backgroundColor: 'green',
  marginRight: '2px'
}

export default function DoneButton() {
  return (
    <div>
      <button style={btnStyle} type="button">Fait !</button>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'

function Desc() {
const {value}=useParams()
console.log(value);
  return (
    <div>


      {value}
    </div>
  )
}

export default Desc
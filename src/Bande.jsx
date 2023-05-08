import React from 'react'
import { useParams } from 'react-router-dom'

function Bande() {
const {value}=useParams()
console.log(value);
  return (
    <div>
<a href="https://www.youtube.com/watch?v=your_video_id_here">Link to YouTube video</a>


    </div>
  )
}

export default Bande
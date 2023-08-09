import React from 'react'
import { useParams, Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {

  const status = 200
  if(status === 404){
    return <Navigate to='/notfound'/>
  }


  const params = useParams()

  const navigate = useNavigate()
  const onClick = () => {
    console.log('Navigate')
    navigate('/about')
  }

  return (
    <div>
      <h1>Post id : {params.id}</h1>
      <h1>Post name : {params.name}</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>This is a show</h1>}/>
      </Routes>
    </div>
  )
}

export default Post

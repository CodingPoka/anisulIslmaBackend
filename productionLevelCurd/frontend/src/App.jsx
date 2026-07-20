
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'


const router=createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Home/>
    </div>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
import React from 'react'
import navigationRouter from './Navigation/Navigation'
import {RouterProvider} from 'react-router-dom'

const App = () => {
  return (
 <>
 <RouterProvider router={navigationRouter} />
 </>
  )
}

export default App

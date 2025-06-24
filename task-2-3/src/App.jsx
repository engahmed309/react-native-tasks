import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'




let x=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'*',element:<NotFound/>}
  ]}
])

function App() {
  const [count, setCount] = useState(0)
  return <RouterProvider router={x}></RouterProvider> 
}

export default App

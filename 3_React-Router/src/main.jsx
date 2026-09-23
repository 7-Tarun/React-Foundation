import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, BrowserRouter, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'

import { gitLoader } from './Components/Github.jsx'
import Github from './Components/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />    {/* Home is the default child of app component ("")*/}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />

      <Route loader={gitLoader} path="github" element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// REACT ROUTER Modern (v6.4+) EXECUTION FLOW

// 1. THE ROUTER STRUCTURE (createBrowserRouter):
//     - Parent Route (path: '/'): Defines the Master Layout (e.g., App.jsx).
//     - Children Array: Contains the nested page routes (e.g., Home, About).

// 2. THE <Outlet /> CONCEPT:
//     - A dynamic placeholder used inside the Parent Layout.
//     - Placed exactly where the page content should change (e.g., between Header and Footer).

// 3. HOW IT WORKS (Behind the Scenes):
//     - Step 1: User visits a URL (e.g., '/about').
//     - Step 2: React renders the Parent Layout component first (Header loads).
//     - Step 3: React encounters the <Outlet /> tag.
//     - Step 4: It checks the URL, grabs the matching Child component (<About />) from the router array, and injects it right into the <Outlet /> space.
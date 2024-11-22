import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './Component/Home.jsx';
import Contact from './Component/Contact.jsx';
import GitHub from './Component/GitHub.jsx';
import About from './Component/About.jsx';
import FetchGitData from './Component/FetchGitData.js';
import GitUser from './Component/GitUser.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <GitHub/>,
//         loader: FetchGitData
//       },
//     ],
//   },
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path = "/" element ={ <App/>}>
   <Route path = "" element ={ <Home/>}/>
   <Route path = "about" element ={ <About/>} />
   <Route path = "logo" element ={ <GitUser/>}/>
   <Route path = "contact" element ={ <Contact/>}/>
   <Route path = "github" element ={ <GitHub/>}
    loader={ FetchGitData}/>

   </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  

);



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

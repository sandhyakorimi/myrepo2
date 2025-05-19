// import React from "react"
// import '../src/App.css'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import MyComponent from './mycomponent';
// import One from './one.jsx'

// import Parent from './props/parent.jsx';
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <FirstOne/>
//       <Second/>
//       <Third/> */}
//       {/* <One/> */}
//      <Parent/>
       

//      </>
//   )
// }
// export default App



// import { useState } from 'react'
// import Holi from './holi.jsx';
// function App() {
//   return(
//     <>
//     <Holi/>
//     </>
//   )
// }
// export default App






















// import { useState } from 'react'
// import Parent1 from './props/newparent'
// function App() {
//   return(
//     <>
//      <Parent1/>
//     </>
//   )
// }
// export default App

// import React from "react";
// import MyState from "./class2";
// import MyTask from "./task2";
// import Task3 from "./task3";
// import Task4 from "./task4";
// import Effect from "./useeffect";
// import Parentone from "./useeffect";

// import Forms from "./forms";
// import Toast from "./ToasterMain";
// import Test from "./useeffect";
// function App(){
//   return(
//     <>
//     {/* <MyState/> */}

//     {/* <MyTask/> */}
//     {/* <Task3/> */}
//     {/* <Task4/> */}
//     {/* <Test/> */}
//     {/* <Forms/> */}
//     <Toast/>
//     </>
//   )
// }
// export default App



// import {BrowserRouter, Route, Routes} from 'react-router-dom'

// import HomePage from "./pages/homepage";
// import AboutPage from "./pages/aboutpage";
// import ContactPage from "./pages/contactpage";
// import HomeData from "./pages/HomeData";
// import User from "./pages/user";
// import UserDetails from './pages/user-details'
// import New from './pages/new.jsx'
// function App(){
//   return(
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage/>}>
//         <Route index element={<HomeData/>}></Route>
//         <Route path="/aboutpage" element={<AboutPage/>}></Route>
//         <Route path="/contactpage" element={<ContactPage/>}></Route>
//         <Route path="/user" element={<User/>}></Route>
//         <Route path ="/new" element={<New/>}></Route>
//         <Route path="/user-details/:id" element={<UserDetails/>}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App



// import React from "react"
// import NewOne from "./new1/newOne";
// import Slick from "./reactSliders/slider1";
// function App(){
//   return(
//     <>
//     {/* <h1>NewOne</h1> */}
//     {/* <NewOne/> */}
//     <Slick/>
//     </>
//   )
// }
// export default App
import React from "react"
import '../src/App.css'
import Storage from "./storages/storage"
import Back from "./back"
import Userdetails from "./back2"
function App(){
  return(
    <>
    {/* <h1>NewOne</h1> */}
    {/* <NewOne/> */}
    {/* <Storage/> */}
    <Back/>
    {/* <Userdetails/> */}
    </>
  )
}
export default App



// import React from 'react';
// import Sidebar from './new1234';
// import Dashboard from './new123';
// import './App.css';

// function App() {
//   const [activePage, setActivePage] = React.useState('dashboard');

//   return (
//     <div className="app-container">
//       <Sidebar setActivePage={setActivePage} />
//       <main className="main-content">
//         {activePage === 'dashboard' && <Dashboard />}
//         {/* Future pages like FloorList, BayRoomView, Reports, Settings can be added here */}
//       </main>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Layout from "./Layout";
import Profile from "./Profile";



const Router = () => {
  return(
    <Routes>
      <Route  exact = { true } path='/' element={ <Layout/> } />
      <Route  exact path="/chat/:chatId/" element={<Layout chatId={ 1 } /> } />
      <Route  exact path="/profile/" element={<Profile /> } />
    </Routes>
  )
}

export default Router
import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Login/LoginPage'
import { PrincipalLayout } from '../Layout/PrincipalLayout'
import { appContext_ } from '../context_/appContext_'

export const AppRouter = () => {

  const { theme } = useContext(appContext_)
  useEffect(() => {
    const changeBody = () => {
      document.body.style.backgroundColor = `${theme ? '#e4efe1' : '#333437'}`;
    }

    changeBody()
  }, [])


  return (
    <Routes>
      <Route path="/taskify/login" element={<LoginPage />} />
      <Route path="/taskify" element={<LoginPage />} />

      <Route path='/taskify/layout' element={<PrincipalLayout />} />
    </Routes>
  )
}

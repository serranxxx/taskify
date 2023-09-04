
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Login/LoginPage'
import { PrincipalLayout } from '../Layout/PrincipalLayout'

export const AppRouter = () => {

  

  return (
    <Routes>
      <Route path="/taskify/login" element={<LoginPage />} />
      <Route path="/taskify" element={<LoginPage />} />
      <Route path='/taskify/layout' element={<PrincipalLayout />} />
    </Routes>
  )
}

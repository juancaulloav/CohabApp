
import { Navigate, Route, Routes } from 'react-router-dom'
import { CohabPage } from '../Pages/CohabPage'


export const CohabRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = { <CohabPage />}/>
        
        <Route path="/*" element = { <Navigate to = "/" /> } />
    </Routes>
  )
}

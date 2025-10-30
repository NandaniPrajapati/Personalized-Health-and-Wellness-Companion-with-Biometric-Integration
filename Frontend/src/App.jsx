import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import HealthProfileForm from './Pages/HealthProfileForm'
import Register from './Pages/Register'
import Navbar from './components/Navbar'
import Insights from './Pages/Insights'

import MentalHealthCheckIn from './components/MentalHealthCheckIn'
import './App.css'

function App() {
  
  
  // Utility to check authentication
  const isAuthenticated = () => {
    return !!localStorage.getItem("token"); // true if token exists
  };
  
  // Protected Route Wrapper
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/Pages/Login" replace />;
    }
    return children;
  };
  return (
    <>



<div className="flex h-173  bg-gray-50">
      
      <div className="flex-1   flex flex-col">
      
        <main className="p-6">
       
          <Routes>
            <Route path="/" element={<Navigate to="/Pages/Login" />} />
            <Route path="/Pages/login" element={<Login />} />
            <Route path="/Pages/register" element={<Register />} />
            <Route path="/Pages/insights" element={<Insights />} />
            <Route path="/Pages/HealthProfileForm" element={<HealthProfileForm />} />
            <Route path="/Pages/Profile" element={<Profile />} />
       
            <Route 
            path="/components/MentalHealthcheckIn" element= 
            {<ProtectedRoute>
            {<MentalHealthCheckIn/> 
            } 
            </ProtectedRoute>}/>
                 
          </Routes>
          
        </main>
      </div>
    </div>


   <div>
    
   </div>
 

    </>
  )
}

export default App

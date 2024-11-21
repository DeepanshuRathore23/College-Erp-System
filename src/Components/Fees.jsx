import React from 'react';
import { useUser } from '../Context/UserContext';
import profileIcon from '../Images/user.png';
import dashboardIcon from '../Images/dashboard-icon.png';
import { Link, Navigate } from 'react-router-dom';

const FeesDashboard = () => {
  const {user} = useUser();
  if(!user){
    return <Navigate to="/"/>
  }
  return (
    <>
      <div className="header bg-gradient-to-r from-blue-500 to-blue-700 p-4 flex items-center shadow-lg">
        <div className="clgLogo text-white font-bold text-2xl ml-4">College Logo</div>
        <div className="right flex ml-auto items-center">
          <div className="dashboard mx-4">
            <Link to="/">
              <img className='h-10 w-10 hover:scale-110 transition-transform' src={dashboardIcon} alt="Dashboard" />
            </Link>
          </div>
          <div className="username mx-4 text-white font-semibold text-lg">{user.name}</div>
          <div className="userpic mx-4">
            <Link>
              <img className='h-10 w-10 rounded-full border-2 border-white hover:scale-110 transition-transform' src={profileIcon} alt="Profile" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 flex space-x-9 items-center justify-center space-between">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Total Fees</h1>
          <h2 className="text-2xl font-semibold text-gray-800">${user.totalfee}</h2>        
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Paid</h1>
          <h2 className="text-2xl font-semibold text-gray-800">${user.paid}</h2>        
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Dues</h1>
          <h2 className="text-2xl font-semibold text-gray-800">${user.dues}</h2>        
        </div>        
      </div>

      
    </>
    

    
  );
};

export default FeesDashboard;

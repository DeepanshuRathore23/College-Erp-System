import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../Images/user.png';
import dashboardIcon from '../Images/dashboard-icon.png';
import navigationIcon from '../Images/navigation-icon.png'
import { useUser } from '../Context/UserContext';
import data from '../UserData.json'

function Exams() {
    const {user} = useUser();
    const currentUser = data.users.find((u) => u.userName === user.userName);
  return (
    <>
        <div className="header bg-gradient-to-r from-blue-500 to-blue-700 p-4 flex items-center shadow-lg">
        <div className="clgLogo text-white font-bold text-2xl ml-4">College Logo</div>
        <div className="right flex ml-auto items-center">
          <div className="dashboard mx-4">
            <Link>
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

      <div className="exams m-2 p-3">     
        {/* Result section */}
        <div className="m-4 p-6 bg-white shadow-lg rounded-lg">
            <div className="head font-bold text-4xl text-blue-600 mb-4">
                <h1>Results</h1>            
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="w-1/6 py-2 px-4 border-b">Semester</th>
                        <th className="w-1/6 py-2 px-4 border-b">SGPA</th>
                        <th className="w-1/6 py-2 px-4 border-b">Back Papers</th>
                        <th className="w-1/6 py-2 px-4 border-b">Result Status</th>
                        <th className="w-1/6 py-2 px-4 border-b">Marksheet</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentUser.result.map((result, index) => (
                    <tr key={index} className="hover:bg-blue-100 transition-colors">
                        <td className="py-2 px-4 border-b text-center">{result.sem}</td>
                        <td className="py-2 px-4 border-b text-center">{result.sgpa}</td>
                        <td className="py-2 px-4 border-b text-center">{result.backPapers}</td>
                        <td className="py-2 px-4 border-b text-center">{result.resultStatus}</td>
                        <td className="py-2 px-4 border-b text-center">{result.marksheet}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            
            
        </div>

        {/* Admit card section */}
        <div className="m-4 p-6 bg-white shadow-lg rounded-lg">
            <div className="head font-bold text-4xl text-blue-600 mb-4">
                <h1>Admit Card</h1>            
            </div>            
            {user.admitCard === null ? (
                <h3>Admit Card not available</h3>    
            ) : (
                <h3>{user.admitCard}</h3>
            )}            
        </div>

        {/* Datesheet section */}
        <div className="m-4 p-6 bg-white shadow-lg rounded-lg">
            <div className="head font-bold text-4xl text-blue-600 mb-4">
                <h1>Datesheet</h1>            
            </div>     
            <Link >
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Download Datesheet</button>
            </Link>   
            
        </div>

       
      </div>
    </>
  );
}

export default Exams;

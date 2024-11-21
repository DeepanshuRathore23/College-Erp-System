import React from 'react'
import { useUser } from '../Context/UserContext';
import { Link } from 'react-router-dom';
import profileIcon from '../Images/user.png';
import dashboardIcon from '../Images/dashboard-icon.png';
import data from '../UserData.json'
import { Navigate } from 'react-router-dom';

function Academics() {
    const { user } = useUser();

    if(!user){
      return <Navigate to="/" replace/>
    }
    const currentUser = data.users.find((u) => u.userName === user.userName);
   
    
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


        <div className="attendance m-4 p-6 bg-white shadow-lg rounded-lg">
        <div className="head font-bold text-4xl text-blue-600 mb-4">
            <h1>Attendance</h1>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-blue-500 text-white">
                <tr>
                <th className="w-1/6 py-2 px-4 border-b">Subject Name</th>
                <th className="w-1/6 py-2 px-4 border-b">Subject Code</th>
                <th className="w-1/6 py-2 px-4 border-b">Subject Faculty</th>
                <th className="w-1/6 py-2 px-4 border-b">Total Present</th>
                <th className="w-1/6 py-2 px-4 border-b">Total Absent</th>
                <th className="w-1/6 py-2 px-4 border-b">Total Lectures</th>
                <th className="w-1/6 py-2 px-4 border-b">Percentage</th>
                </tr>
            </thead>
            <tbody>
                {currentUser.attendance.map((subject, index) => (
                <tr key={index} className="hover:bg-blue-100 transition-colors">
                    <td className="py-2 px-4 border-b text-center">{subject.subjectName}</td>
                    <td className="py-2 px-4 border-b text-center">{subject.subjectCode}</td>
                    <td className="py-2 px-4 border-b text-center">{subject.subjectFaculty}</td>
                    <td className="py-2 px-4 border-b text-center">{subject.totalPresent}</td>
                    <td className="py-2 px-4 border-b text-center">{subject.totalAbsent}</td>
                    <td className="py-2 px-4 border-b text-center">{subject.totalLectures}</td>
                    <td className="py-2 px-4 border-b text-center">{subject.percentage}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>


        <div className="assignments m-4 p-6 bg-white shadow-lg rounded-lg">
        <div className="head font-bold text-4xl text-blue-600 mb-4">
            <h1>Assignments</h1>            
        </div>        
        <h3>No Assignments till now.</h3>
        </div>

        <div className="assignments m-4 p-6 bg-white shadow-lg rounded-lg">
        <div className="head font-bold text-4xl text-blue-600 mb-4">
            <h1>Time Table</h1>
        </div>        
        <h3>Time Table to be Updated soon. </h3>
        </div>
    </>
  )
}

export default Academics
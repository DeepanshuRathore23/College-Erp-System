import React from 'react';
import { useUser } from '../Context/UserContext';
import profileIcon from '../Images/user.png';
import dashboardIcon from '../Images/dashboard-icon.png';
import phoneIcon from '../Images/phone-icon.png';
import mailIcon from '../Images/mail-icon.png';
import academicsIcon from '../Images/academics-icon.jpeg';
import feesIcon from '../Images/fees-icon.jpeg';
import examsIcon from '../Images/exams-icon.jpeg';
import placementsIcon from '../Images/placements-icon.png';
import circularsIcon from '../Images/circulars-icon.png';
import { Link } from 'react-router-dom';

function Home() {
  const { user } = useUser();
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

      <div className="main flex w-full mt-4">
        <div className="left w-1/4 bg-white shadow-lg m-3 p-6 rounded-lg">
          <div className="first bg-blue-200 rounded-3xl p-6 shadow-md">
            <div className="pic flex justify-center">
              <img className='h-28 w-28 rounded-full shadow-md' src={profileIcon} alt="Profile" />
            </div>
            <div className="name flex justify-center text-lg font-semibold mt-4">{user.name}</div>
            <div className="id flex justify-center text-gray-600">{user.id}</div>
            <div className="mail flex justify-center text-gray-600 items-center mt-2">
              <img className='h-4 w-4 mr-2' src={mailIcon} alt="" />
              {user.email}
            </div>
            <div className="phone flex justify-center text-gray-600 items-center mt-2">
              <img className='h-4 w-4 mr-2' src={phoneIcon} alt="" />
              {user.phoneNo}
            </div>
          </div>

          <div className="second mt-4 bg-blue-100 rounded-3xl p-6 shadow-md">
            <div className="info-block flex">
              <h3 className="font-semibold">Father:</h3>
              <span className="ml-2">{user.fatherName}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">Mother:</h3>
              <span className="ml-2">{user.motherName}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">D.O.B:</h3>
              <span className="ml-2">{user.DOB}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">College:</h3>
              <span className="ml-2">{user.collegeName}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">Course:</h3>
              <span className="ml-2">{user.courseName}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">Specialization:</h3>
              <span className="ml-2">{user.specialization}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">Semester:</h3>
              <span className="ml-2">{user.semester}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">Branch:</h3>
              <span className="ml-2">{user.branch}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">Section:</h3>
              <span className="ml-2">{user.section}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">Class Roll No:</h3>
              <span className="ml-2">{user.classRollNo}</span>
            </div>
            <hr className="border-t-1 border-blue-400 my-2" />
            <div className="info-block flex">
              <h3 className="font-semibold">University Roll No:</h3>
              <span className="ml-2">{user.universityRollNo}</span>
            </div>
          </div>
        </div>

        <div className="right w-3/4 bg-blue-50 shadow-lg p-6 m-3 rounded-lg">                                     

                    <div className="sub-pages flex flex-wrap">
                      <div className="academics m-3">
                        <Link to='/Academics'>
                          <img className='border border-gray-300 rounded-xl' src={academicsIcon} alt="" style={{height:"180px", width:"180px"}}/>
                        </Link>
                        <h2 className='flex justify-center font-bold'>Academics</h2>
                      </div>                      

                      <div className="exams m-3">
                        <Link to='/Exams'>
                          <img className='border border-gray-300 rounded-xl' src={examsIcon} alt="" style={{height:"180px", width:"180px"}}/>
                        </Link>
                        <h2 className='flex justify-center font-bold'>Exams</h2>
                      </div>

                      <div className="fees m-3">
                        <Link to='/Fees' >
                          <img className='border border-gray-300 rounded-xl' src={feesIcon} alt="" style={{height:"180px", width:"180px"}}/>
                        </Link>
                        <h2 className='flex justify-center font-bold'>Fees</h2>
                      </div>

                      <div className="placements m-3">
                        <Link >
                          <img className='border border-gray-300 rounded-xl' src={placementsIcon} alt="" style={{height:"180px", width:"180px"}}/>
                        </Link>
                        <h2 className='flex justify-center font-bold'>Placements</h2>
                      </div>

                      <div className="circulars m-3">
                        <Link>
                          <img className='border border-gray-300 rounded-xl' src={circularsIcon} alt="" style={{height:"180px", width:"180px"}}/>
                        </Link>
                        <h2 className='flex justify-center font-bold'>Circulars</h2>
                      </div>
                    </div>
                    
                </div>
      </div>
    </>
  );
}

export default Home;

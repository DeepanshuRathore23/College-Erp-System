import React, {useState, useEffect} from 'react';
import collegeImage from '../Images/collegeImage.jpeg';
import Data from '../UserData.json'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import { generateCaptcha } from '../Utils/CaptchaGenerator';


function LoginPage() { 
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {setUser} = useUser();
    const [captcha, setCaptcha] = useState("")
    const [captchaInput, setCaptchaInput] = useState('')

    useEffect(() => {
      setCaptcha(generateCaptcha())
    }, [])
    

    const handleLogin = (e) => {
        e.preventDefault();

        const user = Data.users.find(
            (u) => u.userName === userName && u.password === password
        )

        if(user){
            if(captcha === captchaInput){
                setUser(user)
                navigate('/Home')
            }else{
                setError("Wrong Captcha")
            }            
        }else{
            setError("Wrong Username or password")
        }
    }

    // generateCaptcha()


  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="college w-full lg:w-1/2 flex flex-col justify-center items-start p-10 lg:p-20 text-white" style={{ backgroundColor: "rgb(0 60 162)" }}>
        <h1 className="text-2xl lg:text-3xl font-bold mb-8">University ERP</h1>

        <div className="collegeImage mb-10">
          <img src={collegeImage} alt="College" className="rounded-lg shadow-lg" />
        </div>

        <h2 className="text-2xl lg:text-4xl font-semibold">Welcome to your University ERP</h2>
      </div>

      <div className="login w-full lg:w-1/2 flex flex-col justify-center items-center p-10 lg:p-20 bg-gray-100">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form className="w-full max-w-md" onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">User ID</label>

            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your user ID"
              value={userName}
              onChange={(e) =>  setUserName(e.target.value)}
              
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>

            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>  setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Captcha</label>

            <div className="flex items-center">
              <input
                type="text"
                className="w-1/2 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter Captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />

              <div className="w-1/2 bg-gray-200 text-center py-2 border rounded-r-lg">
                <span className="text-xl font-bold">{captcha}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>          
        </form>

        <div className="flex justify-between items-center mt-4 w-full max-w-md">
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          <a href="#" className="text-blue-600 hover:underline">Forgot ID?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

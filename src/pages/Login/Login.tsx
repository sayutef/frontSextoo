import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="w-[1536px] h-[695px] bg-[#fafaf5] mx-auto flex items-center justify-center">
      <div className="relative w-full h-full overflow-hidden shadow-xl rounded-xl">
        <div className={`flex w-[200%] h-full transition-transform duration-700 ease-in-out ${isSignUp ? "-translate-x-1/2" : "translate-x-0"}`}>
          
          {/* Sign In */}
          <div className="w-1/2 bg-white flex flex-col items-center justify-center px-10 space-y-5">
            <h1 className="text-4xl font-bold text-teal-600 text-center">Sign in to Pybot</h1>
            <div className="flex space-x-4 text-xl text-gray-700">
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
            </div>
            <div className="w-full max-w-md space-y-4 flex flex-col items-center">
              <div className="flex items-center bg-[#cfcfe3] px-3 py-2 rounded-md w-full">
                <HiOutlineMail className="text-gray-600 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent outline-none w-full placeholder:text-gray-700 text-sm"
                />
              </div>
              <div className="flex items-center bg-[#cfcfe3] px-3 py-2 rounded-md w-full">
                <HiOutlineLockClosed className="text-gray-600 mr-2" />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent outline-none w-full placeholder:text-gray-700 text-sm"
                />
              </div>
            </div>
            <p className="text-sm text-gray-700 cursor-pointer">Forgot your password?</p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg">SIGN IN</button>
          </div>

          {/* Sign Up */}
          <div className="w-1/2 bg-white flex flex-col items-center justify-center px-10 space-y-5">
            <h1 className="text-4xl font-bold text-teal-600 text-center">Create Account</h1>
            <div className="flex space-x-4 text-xl text-gray-700">
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
            </div>
            <div className="w-full max-w-md space-y-4 flex flex-col items-center">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-[#cfcfe3] placeholder:text-gray-700 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-[#cfcfe3] placeholder:text-gray-700 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-[#cfcfe3] placeholder:text-gray-700 rounded-md"
              />
            </div>
            <p className="text-sm text-gray-700 cursor-pointer">Forgot your password?</p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg">SIGN UP</button>
          </div>
        </div>

        {/* Overlay Panel */}
        <div className={`absolute top-0 h-full w-1/2 bg-teal-500 text-white flex flex-col items-center justify-center px-8 transition-all duration-700 ease-in-out 
          ${isSignUp ? "left-0" : "left-1/2"}`}>
          <h2 className="text-3xl font-bold mb-4">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
          <p className="text-base mb-6 text-center">
            {isSignUp
              ? "To keep connected with us please login with your personal info"
              : "Enter your personal details and start your journey with us"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-600 transition"
          >
            {isSignUp ? "SIGN IN" : "SIGN UP"}
          </button>
        </div>
      </div>
    </div>
  )
}

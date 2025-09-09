import { useState } from "react";
import "./authpage.css";

function Authpage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  return (
    <>
      {/* Header */}
      <header className='auth-header flex flex-row justify-between items-center p-4 bg-white-100 shadow'>
        <div className='flex flex-row gap-2 items-center'>
          <img src='/public/india.gif' alt='gov-insig' />
          <img src='/public/G_20.png' alt='g20-icon' />
        </div>
        <div>Indian Railways</div>
        <div className='flex flex-row gap-2 items-center'>
          <img src='/public/75.png' alt='75-logo' />
          <img src='/public/RailwaysEmblem.png' alt='another-logo' />
        </div>
      </header>

      {/* Toggle Section */}
      <div className='flex justify-center my-6'>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className='bg-blue-600 text-white px-6 py-2 rounded shadow'
        >
          Switch to {isLogin ? "Signup" : "Login"}
        </button>
      </div>

      {/* Main Form Section */}
      <div className='flex h-[70vh]'>
        {/* Left: Manufacturer */}
        <div className='w-1/2 flex flex-col justify-center items-center bg-gray-50 p-6'>
          <h2 className='text-2xl font-semibold mb-4'>
            Manufacturer {isLogin ? "Login" : "Signup"}
          </h2>
          <form className='flex flex-col gap-4 w-80'>
            {!isLogin && (
              <input
                type='text'
                placeholder='Company Name'
                className='border p-2 rounded'
              />
            )}
            <input
              type='email'
              placeholder='Email'
              className='border p-2 rounded'
            />
            <input
              type='password'
              placeholder='Password'
              className='border p-2 rounded'
            />
            <button className='bg-blue-600 text-white p-2 rounded'>
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        </div>

        {/* Right: Railway Officer */}
        <div className='w-1/2 flex flex-col justify-center items-center bg-white p-6 shadow-inner'>
          <h2 className='text-2xl font-semibold mb-4'>
            Railway Officer {isLogin ? "Login" : "Signup"}
          </h2>
          <form className='flex flex-col gap-4 w-80'>
            {!isLogin && (
              <input
                type='text'
                placeholder='Officer Name'
                className='border p-2 rounded'
              />
            )}
            <input
              type='text'
              placeholder='Railway ID'
              className='border p-2 rounded'
            />
            <input
              type='password'
              placeholder='Password'
              className='border p-2 rounded'
            />
            <button className='bg-green-600 text-white p-2 rounded'>
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Authpage;

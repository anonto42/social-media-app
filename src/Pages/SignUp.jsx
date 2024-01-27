import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name , setName ] = useState();
  const [email, setEmail] = useState();
  const [password , setPassword] = useState();
  return (
  <div className=' flex justify-center items-center h-screen'>
  {/* {laoding && <Loader/>} */}
  <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
      <div className="">
          <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
      </div>
      <div>
          <input type="text"
              name='name'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='name'
              value={name}
              onChange={(e)=> setName(e.target.value)}
          />
      </div>
      <div>
          <input type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Email'
          />
      </div>
      <div>
          <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Password'
          />
      </div>
      <div className=' flex justify-center mb-3'>
          <button onClick={""}
              className=' bg-red-500 w-[150px] text-white font-bold  px-2 py-2 rounded-lg border border-red'>
              Signup
          </button>
      </div>
      <div>
          <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
      </div>
  </div>
</div>
  )
}

export default SignUp
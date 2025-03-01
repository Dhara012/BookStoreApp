import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, 
    handleSubmit, 
    formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <label htmlFor="email" className='block'>Email</label>
              <input 
                type='email' 
                id='email'
                placeholder='Enter Your Email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <label htmlFor="password" className='block'>Password</label>
              <input 
                type='password' 
                id='password'
                placeholder='Enter Your Password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
            </div>

            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button 
                type='submit'
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>
              <p>
                Not Registered?{""}
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>{""}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

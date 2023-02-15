import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/register.svg";

const SignUp = () => {
  return (
    <div className={`bg-gray-400 flex justify-center items-center h-screen`}>
      <div className='flex flex-row items-center' style={{ height: "600px" }}>
        <div className='flex flex-col items-center mx-auto max-w-7xl px-4 lg:px-8 bg-gradient-to-r from-[#F7F1F1] to-[#A1A2E9] h-full rounded-l-3xl w-full md:w-1/2'>
          <div className='pt-10 pb-5 flex justify-center'>
            <img src={img} alt='register' />
          </div>
          <h2 className='text-3xl font-bold text-gray-900 p-4'>Welcome Back!</h2>
          <p className='text-base font-semibold text-gray-600 p-3'>To keep connected with us please login with your personal details</p>
          <Link to='/login' className='bg-[#03263f93] rounded-3xl text-white text-xl font-bold py-2 px-6 border-none hover:bg-blue-400'>
            SIGN IN
          </Link>
        </div>
        {/** ------------------------------ */}
        <div className='flex flex-col items-center mx-auto justify-between max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 p-20 h-full rounded-r-3xl w-full md:w-1/2'>
          <h2 className='text-3xl font-bold text-gray-900'>Create Account</h2>
          <div className='flex flex-row items-center justify-content-center gap-4'>
            <div className='border border-blue-400 rounded-full p-1 hover:bg-blue-200 hover:border-none'>
              <svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#clip0_189_48)'>
                  <path
                    d='M44.47 12.7701C40.548 9.47632 35.6196 7.61917 30.4992 7.50554C25.3788 7.39192 20.3728 9.02862 16.3086 12.1452C12.2443 15.2618 9.36491 19.6717 8.14624 24.6463C6.92758 29.6208 7.44255 34.8623 9.60606 39.5046C11.7696 44.1468 15.4522 47.912 20.0453 50.178C24.6384 52.444 29.8671 53.0752 34.8675 51.9672C39.8679 50.8592 44.3406 48.0784 47.5466 44.0843C50.7526 40.0902 52.5 35.1218 52.5 30.0001H32.5'
                    stroke='black'
                    stroke-width='5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_189_48'>
                    <rect width='60' height='60' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='border border-blue-400 rounded-full p-1 hover:bg-blue-200 hover:border-none'>
              <svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#clip0_189_42)'>
                  <path
                    d='M22.5 47.5001C11.75 51.0001 11.75 41.2501 7.5 40.0001M37.5 52.5001V43.7501C37.5 41.2501 37.75 40.2501 36.25 38.7501C43.25 38.0001 50 35.2501 50 23.7501C49.997 20.7625 48.8314 17.8934 46.75 15.7501C47.7262 13.155 47.6363 10.2792 46.5 7.75012C46.5 7.75012 43.75 7.00012 37.75 11.0001C32.6681 9.67659 27.3319 9.67659 22.25 11.0001C16.25 7.00012 13.5 7.75012 13.5 7.75012C12.3637 10.2792 12.2738 13.155 13.25 15.7501C11.1686 17.8934 10.003 20.7625 10 23.7501C10 35.2501 16.75 38.0001 23.75 38.7501C22.25 40.2501 22.25 41.7501 22.5 43.7501V52.5001'
                    stroke='black'
                    stroke-width='5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_189_42'>
                    <rect width='60' height='60' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='border border-blue-400 rounded-full p-1 hover:bg-blue-200 hover:border-none'>
              <svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#clip0_189_45)'>
                  <path
                    d='M17.3335 25.1111V34.8889H24.9699V52H35.1517V34.8889H42.788L45.3335 25.1111H35.1517V20.2222C35.1517 19.5739 35.4199 18.9522 35.8972 18.4937C36.3746 18.0353 37.022 17.7778 37.6971 17.7778H45.3335V8H37.6971C34.3216 8 31.0844 9.28769 28.6976 11.5798C26.3108 13.8719 24.9699 16.9807 24.9699 20.2222V25.1111H17.3335Z'
                    stroke='black'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_189_45'>
                    <rect width='60' height='60' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <p className='text-base font-medium text-gray-500 font-montserrat'>or use your email for registration</p>
          <div className='flex flex-col items-center'>
            <input
              type='text'
              placeholder='Name'
              className='p-3 pl-4 w-96 rounded-3xl my-2 bg-blue-100 border-blue-300 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent'
            />
            <input
              type='email'
              placeholder='Email'
              className='p-3 pl-4 w-96 rounded-3xl my-2 bg-blue-100 border-blue-300 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent'
            />
            <input
              type='password'
              placeholder='Password'
              className='p-3 pl-4 w-96 rounded-3xl my-2 bg-blue-100 border-blue-300 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent'
            />
          </div>
          <button className='bg-blue-600 rounded-3xl text-white text-xl font-bold py-2 px-6 border border-blue-600 hover:bg-blue-700'>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

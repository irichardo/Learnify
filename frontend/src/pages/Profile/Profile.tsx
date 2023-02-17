import React from 'react';
import logo from '../../assets/icons/user-circle.png';

const Profile = () => {
  return (
    <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
            <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
              <div className='text-gray-600'>
                <p className='font-medium text-lg'>Personal Details</p>
                <div className=' w-4/6 h-4/6'>
                  <img src={logo} alt='Profile' />
                </div>
                <button className='flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-gray-400 hover:text-white'>
                  Change
                </button>
              </div>

              <div className='lg:col-span-2'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                  <div className='md:col-span-2'>
                    <label htmlFor='address'>First Name</label>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='ej. Abdul Rahman'
                      autoComplete='off'
                    />
                  </div>

                  <div className='md:col-span-3'>
                    <label htmlFor='city'>Last Name</label>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='ej. Mossad'
                      autoComplete='off'
                    />
                  </div>

                  <div className='md:col-span-5'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='email@domain.com'
                      autoComplete='off'
                    />
                  </div>

                  <div className='md:col-span-3'>
                    <label htmlFor='address'>Address</label>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='Address'
                      autoComplete='off'
                    />
                  </div>

                  <div className='md:col-span-2'>
                    <label htmlFor='city'>City</label>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='City'
                      autoComplete='off'
                    />
                  </div>

                  <div className='md:col-span-2'>
                    <label htmlFor='country'>Country / region</label>
                    <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                      <input
                        name='country'
                        id='country'
                        placeholder='Country'
                        className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
                      />
                      <button
                        tabIndex={Number('-1')}
                        className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'
                      >
                        <svg
                          className='w-4 h-4 mx-2 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <line x1='18' y1='6' x2='6' y2='18'></line>
                          <line x1='6' y1='6' x2='18' y2='18'></line>
                        </svg>
                      </button>
                      <button
                        tabIndex={Number('-1')}
                        form='show_more'
                        className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'
                      >
                        <svg
                          className='w-4 h-4 mx-2 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <polyline points='18 15 12 9 6 15'></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className='md:col-span-2'>
                    <label htmlFor='state'>State / province</label>
                    <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                      <input
                        name='state'
                        id='state'
                        placeholder='State'
                        className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
                        autoComplete='off'
                      />
                      <button
                        tabIndex={Number('-1')}
                        className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'
                      >
                        <svg
                          className='w-4 h-4 mx-2 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <line x1='18' y1='6' x2='6' y2='18'></line>
                          <line x1='6' y1='6' x2='18' y2='18'></line>
                        </svg>
                      </button>
                      <button
                        tabIndex={Number('-1')}
                        form='show_more'
                        className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'
                      >
                        <svg
                          className='w-4 h-4 mx-2 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <polyline points='18 15 12 9 6 15'></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className='md:col-span-1'>
                    <label htmlFor='zipcode'>Zipcode</label>
                    <input
                      type='text'
                      name='zipcode'
                      id='zipcode'
                      className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder=''
                    />
                  </div>

                  {/**
                  <div className='md:col-span-5'>
                    <div className='inline-flex items-center'>
                      <input
                        type='checkbox'
                        name='billing_same'
                        id='billing_same'
                        className='form-checkbox'
                      />
                      <label htmlFor='billing_same' className='ml-2'>
                        My billing address is different than above.
                      </label>
                    </div>
                  </div>
                  */}

                  <div className='md:col-span-5 text-right'>
                    <div className='inline-flex items-end'>
                      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1'>
                        Cancel
                      </button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1'>
                        Save Chnages
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

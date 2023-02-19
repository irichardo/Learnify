import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { valProfile } from '../../helpers/validation';
import default_logo from '../../assets/imgs/profile-img-default.png';

interface FormValues {
  name: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  state: string;
}

const Profile = () => {
  const initial_values: FormValues = {
    name: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
  };

  const handle_submit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className='min-h-screen p-6 bg-gray-700 flex items-center justify-center'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
            <Formik
              initialValues={initial_values}
              onSubmit={handle_submit}
              validate={valProfile}
            >
              <Form>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
                  <div className='flex items-center justify-center flex-col text-gray-600'>
                    <p className='font-medium text-2xl'>Personal Details</p>
                    <div className='bg-slate-50 w-4/6 h-4/6 rounded-2xl my-5'>
                      <img src={default_logo} alt='Profile' />
                    </div>
                    <button className='flex items-center px-5 py-1 text-gray-500 text-lg bg-gray-300 rounded-3xl group hover:bg-gray-400 hover:text-white'>
                      <i className='mdi mdi-camera text-gray-400 text-lg group-hover:text-white mr-2'></i>
                      Select a photo
                    </button>
                  </div>

                  <div className='lg:col-span-2'>
                    <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                      <div className='md:col-span-2'>
                        <label htmlFor='address'>First Name</label>
                        <Field
                          name='name'
                          type='text'
                          className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                          placeholder='ej. Mohammad'
                          autoComplete='off'
                        />
                        <ErrorMessage name='name' />
                      </div>

                      <div className='md:col-span-3'>
                        <label htmlFor='city'>Last Name</label>
                        <Field
                          type='text'
                          name='lastName'
                          className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                          placeholder='ej. Hasan Akhund'
                          autoComplete='off'
                        />
                        <ErrorMessage name='lastName' />
                      </div>

                      <div className='md:col-span-5'>
                        <label htmlFor='email'>Email Address</label>
                        <Field
                          name='email'
                          type='text'
                          className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                          placeholder='email@domain.com'
                          autoComplete='off'
                        />
                        <ErrorMessage name='email' />
                      </div>

                      <div className='md:col-span-3'>
                        <label htmlFor='address'>Address</label>
                        <Field
                          type='text'
                          name='address'
                          className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                          placeholder='Address'
                          autoComplete='off'
                        />
                        <ErrorMessage name='address' />
                      </div>

                      <div className='md:col-span-2'>
                        <label htmlFor='city'>City</label>
                        <Field
                          type='text'
                          name='city'
                          className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                          placeholder='City'
                          autoComplete='off'
                        />
                        <ErrorMessage name='city' />
                      </div>

                      <div className='md:col-span-3'>
                        <label htmlFor='country'>Country / region</label>
                        <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                          <Field
                            name='country'
                            type='text'
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
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
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
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <polyline points='18 15 12 9 6 15'></polyline>
                            </svg>
                          </button>
                        </div>
                        <ErrorMessage name='country' />
                      </div>

                      <div className='md:col-span-2'>
                        <label htmlFor='state'>State / province</label>
                        <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                          <Field
                            name='state'
                            type='text'
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
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
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
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <polyline points='18 15 12 9 6 15'></polyline>
                            </svg>
                          </button>
                        </div>
                        <ErrorMessage name='state' />
                      </div>

                      <div className='md:col-span-5 text-right pt-5'>
                        <div className='inline-flex items-end'>
                          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1'>
                            Cancel
                          </button>
                          <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1'
                            type='submit'
                          >
                            Save Chnages
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

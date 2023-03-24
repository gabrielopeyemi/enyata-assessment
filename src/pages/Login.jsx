import React from 'react';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Logo from '../components/logo/Logo';


export default function Login() {
  return (
    <React.Fragment>
      {/* <Head>
        <title>Login | StarWars</title>
        <meta name="description" content="all about star wars" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className='w-full flex items-center h-full '>
          <div className='w-[480px] bg-oxfordBlue h-screen flex justify-center items-center'>
            <Logo className='w-[386px] h-[167px]' />
          </div>
          <div className='h-screen lg:w-[calc(100%_-_480px)] flex justify-center items-center text-black'>
            <div className='w-[467px] border border-antiFlashWhite py-3 px-6 rounded-[8px]'>
              <div className='pb-[62px]'>
                <h2 className='font-semibold text-lg'>Login</h2>
                <p className='font-extralight text-md'>Kindly enter your details to log in </p>
              </div>
              <Input type='text' title='Email Address' />
              <Input type='password' title='Password'  />
              <Button />
              <button className='text-center text-celticBlue mb-9 w-full'>Forgot your password?</button>
              <div className='flex items-center justify-center gap-2'>
                <button className='underline'>Privacy Policy</button>
                <span>and</span>
                <button className='underline'>Terms of services</button>
              </div>
            </div>
          </div>
      </main>
    </React.Fragment>
  )
}

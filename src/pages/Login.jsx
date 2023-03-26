import React, { useState } from 'react';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Logo from '../components/logo/Logo';
import { handleToast } from '../utils/handleToast';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const initialData = { email: '', password: '' };
  const [formData, setFormData] = useState(initialData)
  

  const handleLogin = () =>{
    const { email, password } = formData;
    if (!/\S+@\S+\.\S+/.test(email)) {
      return handleToast('Please enter a valid email', 'error');
    } 
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
      return handleToast('Password should consist of only letters and numbers', 'error');
    } 
    navigate('/overview');
    return handleToast('login successful', 'success')
  }
  
  return (
    <React.Fragment>
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

              <Input 
                type='text' 
                title='Email Address' 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                value={formData.email}
              />
              <Input 
                type='password' 
                title='Password' 
                pattern=""
                required
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                value={formData.password}
              />
              
              <Button title={'Log in'} onClick={handleLogin} />
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

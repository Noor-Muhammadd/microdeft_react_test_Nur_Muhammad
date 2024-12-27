import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Pre-fill credentials function
  const fillCredentials = () => {
    setValue('email', 'bill2@gmail.com');
    setValue('password', '12345678');
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://react-interview.crd4lc.easypanel.host/api/login',
        data
      );
      const { token } = response.data.data;
      localStorage.setItem('authToken', token);
      toast.success('Login successful!');
      navigate('/');
      window.location.reload();
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
              })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password?.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Button to pre-fill credentials */}
        <button
          onClick={fillCredentials}
          className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Use Demo Credentials
        </button>
      </div>
    </div>
  );
};

export default Login;

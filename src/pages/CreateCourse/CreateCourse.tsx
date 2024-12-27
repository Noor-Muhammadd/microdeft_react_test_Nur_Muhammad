import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

const CreateCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const token = localStorage.getItem('authToken'); 

    if (!token) {
      toast.error('Unauthorized: Please login first.');
      return;
    }

    try {
      await axios.post(
        'https://react-interview.crd4lc.easypanel.host/api/course',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Course created successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to create course. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Course</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title', { required: 'Title is required' })}
              placeholder="Enter course title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title?.message as string}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register('description', { required: 'Description is required' })}
              placeholder="Enter course description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description?.message as string}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="badge_text"
              className="block text-gray-700 font-medium mb-2"
            >
              Badge Text
            </label>
            <input
              type="text"
              id="badge_text"
              {...register('badge_text', { required: 'Badge text is required' })}
              placeholder="Enter badge text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.badge_text && (
              <p className="text-red-600 text-sm mt-1">{errors.badge_text?.message as string}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="badge_color"
              className="block text-gray-700 font-medium mb-2"
            >
              Badge Color
            </label>
            <input
              type="color"
              id="badge_color"
              {...register('badge_color', { required: 'Badge color is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.badge_color && (
              <p className="text-red-600 text-sm mt-1">{errors.badge_color?.message as string}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="instructor_name"
              className="block text-gray-700 font-medium mb-2"
            >
              Instructor Name
            </label>
            <input
              type="text"
              id="instructor_name"
              {...register('instructor_name', { required: 'Instructor name is required' })}
              placeholder="Enter instructor name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.instructor_name && (
              <p className="text-red-600 text-sm mt-1">{errors.instructor_name?.message as string}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;

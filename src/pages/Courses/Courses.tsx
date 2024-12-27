import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

interface Course {
  id: string;
  title: string;
  description: string;
  badge_color: string;
  badge_text: string;
  instructor_name: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        toast.error('Unauthorized: Please login first.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          'https://react-interview.crd4lc.easypanel.host/api/course',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourses(response.data.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses. Please try again.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Courses</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id as string}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title as string}
              </h2>
              <p className="text-gray-600 mb-4">
                {course.description as string}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-sm font-semibold py-1 px-3 rounded-lg`}
                  style={{ backgroundColor: course.badge_color as string, color: '#fff' }}
                >
                  {course.badge_text as string}
                </span>
                <span className="text-sm text-gray-500">By {course.instructor_name as string}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

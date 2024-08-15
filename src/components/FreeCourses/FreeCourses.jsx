import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../utils';
const courses = [
  {
    title: 'Digital Leadership',
    description: 'Develop the skills needed to lead digital transformation initiatives and drive innovation within your organization.',
  },
  {
    title: 'Advanced SEO Strategies',
    description: 'Master the art of search engine optimization with advanced techniques that enhance visibility and performance.',
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Learn how to leverage data analytics to inform strategic decisions and optimize business outcomes.',
  },
  {
    title: 'Brand Storytelling',
    description: 'Discover the power of storytelling in building a compelling brand identity that connects with your audience.',
  },
  {
    title: 'Social Media Strategy and Management',
    description: 'Gain insights into creating and managing effective social media campaigns that engage and convert.',
  },
];

const FreeCourses = () => {
  return (
    <div className='container mx-auto py-16 px-8'>
      <h2 className='text-3xl md:text-5xl font-bold text-center text-orange'>
        Free Courses
      </h2>
      <p className='text-center text-xl md:text-2xl text-skyBlue my-8'>
        Empower Your Business with Knowledge and Expertise
      </p>
      <p className='text-center text-lg md:text-xl text-gray-700 mb-16'>
        At Business Drivers 01, we believe in empowering business leaders and marketers with the knowledge and skills needed to thrive in today’s competitive landscape. Our free courses offer valuable insights into the latest trends and best practices in digital marketing and business development.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {courses.map((course, index) => (
          <div key={index} className='p-8 border-2 border-orange rounded-lg shadow-lg bg-white'>
            <h3 className='text-2xl font-bold text-orange mb-4'>{course.title}</h3>
            <p className='text-lg text-gray-700'>{course.description}</p>
          </div>
        ))}
      </div>
    
      <div className="btn-container flex justify-center my-8">
                    <NavLink to="/contact">
                        <Button
                            children={"ENROLL NOW!"}
                            className=' text-white px-8 font-bold bg-[#60c0e2]
                      hover:bg-[#ffffff] hover:text-skyBlue border-[1.5px] border-[#60c0e2] duration-500'
                        />
                    </NavLink>
                </div>
    </div>
  );
};

export default FreeCourses;

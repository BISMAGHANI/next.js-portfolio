import React from 'react'
import Navbar from "./../components/Navbar";
import "../app/globals.css";


const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Projects</h2>
        <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example project cards */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Project One</h3>
            <p className="text-gray-600 mt-2">
            A Resume Builder Project Uses HTML, CSS, And JavaScript To Create An Interactive Tool That Lets Users Input Details And Automatically Generate A Professional Resume. It Helps Beginners Learn Web Development Skills While Producing A Polished, Ready-To-Use Document.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Project Two</h3>
            <p className="text-gray-600 mt-2">
            A To-Do List Project Is A Simple Yet Effective Way For Beginners To Practice Their Web Development Skills. It Lets Users Add, Edit, And Delete Tasks In An Organized List. Using HTML, CSS, And JavaScript, Developers Create An Interactive App Where Tasks Can Be Marked As Complete. This Project Helps Beginners Learn Coding Concepts And Build A Useful Tool For Daily Task Management.
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </>
  )
}

export default Projects
import React from "react";
import Navbar from "./../components/Navbar";
import "../app/globals.css";


const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto mt-6 text-gray-600 space-y-4">
          <p>
          A Beginner Web Developer Embarks On An Exciting Journey Into The World Of Web Development, Learning Fundamental Skills Like HTML, CSS, And JavaScript. At This Stage, They Focus On Creating Simple Web Pages, Experimenting With Basic Layouts, And Understanding The Core Structure Of Websites. This Foundation Is Crucial, As It Sets The Stage For More Complex Projects In The Future.
          </p>
          <p>
          With Each Line Of Code, The Beginner Web Developer Gains Confidence And Familiarity With Various Tools And Frameworks. They Start Exploring Popular Front-End Libraries Like Bootstrap To Simplify Design And Enhance User Experience. Debugging, A Core Part Of Development, Becomes A Daily Challenge, Yet Also An Opportunity To Learn And Improve Problem-Solving Skills.
          </p>
          <p>
          As Skills Progress, The Beginner Web Developer Learns To Integrate Back-End Technologies Such As Node.js And Express, Enabling Dynamic And Interactive Websites. They Begin To Understand The Importance Of Responsive Design, Accessibility, And Cross-Browser Compatibility. With Practice And Patience, The Developer Gradually Transforms From A Newbie Into A More Proficient And Confident Web Creator.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
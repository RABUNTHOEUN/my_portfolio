"use client";

import Image from 'next/image';
import React from 'react';
import Projects from '../page'; // Importing Projects component

const ProjectTwo = () => {
  return (
    <div className="container mx-auto my-8 px-4"> {/* Added padding for mobile responsiveness */}
      <h1 className="text-4xl font-bold mb-4">Project Two</h1>
      <div className="relative w-full h-64 sm:h-80 md:h-screen my-4"> {/* Responsive height */}
        <Image 
          src="/p2.png" 
          alt="Project Two" 
          layout="fill" // This allows the image to fill the parent div
          className="object-cover rounded-lg" // Added border radius for styling
        />
      </div>
      <p className="text-lg mb-4">
        Detailed description of Project Two. This project involved...
      </p>
      <a 
        href="https://github.com/your-repo/project-two" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline mt-4 block"
      >
        View on GitHub
      </a>
      <hr className='my-16'/>
      <Projects/> {/* Including the Projects component */}
    </div>
  );
};

export default ProjectTwo;

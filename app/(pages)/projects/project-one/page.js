"use client";

import Image from 'next/image';
import React from 'react';
import Projects from '../page';

const ProjectOne = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold">Project One</h1>
      <div className="relative w-full h-screen my-4"> {/* Set a fixed height for the image */}
        <Image 
          src="/p1.png" 
          alt="Project One" 
          layout="fill" // This allows the image to fill the parent div
          className="object-cover" 
        />
      </div>
      <p className="text-lg">
        Detailed description of Project One. This project involved...
      </p>
      <a 
        href="https://github.com/your-repo/project-one" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline mt-4 block"
      >
        View on GitHub
      </a>
      <hr className='my-16'/>
      <Projects/>
    </div>
  );
};

export default ProjectOne;
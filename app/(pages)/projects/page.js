"use client"

import ProjectCard from '../../components/ProjectCard';
import { useRouter } from 'next/navigation'; // Importing useRouter from next/navigation

const Projects = () => {
  const router = useRouter(); // Initialize the router

  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one',
      image: '/p1.png', // Example image path
      link: '/projects/project-one', // Detail page link
    },
    {
      title: 'Project Two',
      description: 'Description of project two',
      image: '/p2.png',
      link: '/projects/project-two',
    },
    {
      title: 'Project Three',
      description: 'Description of project three',
      image: '/p3.png',
      link: '/projects/project-three',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-blue-600">My Projects</h3>
        <p className="text-lg text-gray-700 mt-4 mb-10">
          Here are some of the projects I&apos;ve worked on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => router.push(project.link)} // Using router.push for navigation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

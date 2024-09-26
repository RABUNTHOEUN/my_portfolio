// components/Projects.js
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'Description of project one' },
    { title: 'Project Two', description: 'Description of project two' },
    { title: 'Project Three', description: 'Description of project three' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

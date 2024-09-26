// components/ProjectCard.js
const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-xl font-bold">{project.title}</h4>
      <p className="mt-2">{project.description}</p>
    </div>
  );
  
  export default ProjectCard;
  
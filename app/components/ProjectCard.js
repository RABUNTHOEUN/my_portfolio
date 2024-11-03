import Image from "next/image";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover" // This replaces `className="object-cover"`
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-blue-600">
          {project.title}
        </h4>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

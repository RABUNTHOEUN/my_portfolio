// import profile from '';

import Image from "next/image";
import Link from "next/link";

const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="container mx-auto text-center">
      {/* About Me Heading */}
      <h3 className="text-4xl font-bold mb-6 text-blue-600">About Me</h3>
      
      {/* About Me Text */}
      <p className="text-lg mb-6 text-gray-700">
        I am a passionate web developer with a knack for creating elegant and functional websites. 
        With several years of experience, I have worked on various projects that combine both 
        design and functionality to deliver high-quality results.
      </p>

      {/* Image of the Developer */}
      <div className="mb-6">
        <Image 
        width={200}
        height={200}
          src="/profile.png" // Replace with your image path
          alt="My Profile" 
          className="rounded-full w-32 h-32 mx-auto shadow-lg"
        />
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <h4 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h4>
        <ul className="flex flex-wrap justify-center space-x-6">
          <li className="text-gray-600 text-lg">HTML & CSS</li>
          <li className="text-gray-600 text-lg">JavaScript</li>
          <li className="text-gray-600 text-lg">React & Next.js</li>
          <li className="text-gray-600 text-lg">Laravel</li>
          <li className="text-gray-600 text-lg">Spring Boot</li>
          <li className="text-gray-600 text-lg">Node.js</li>
          <li className="text-gray-600 text-lg">Tailwind CSS</li>
        </ul>
      </div>

      {/* Statistics or Experience Summary */}
      <div className="mt-10 flex justify-center space-x-8">
        <div>
          <h5 className="text-3xl font-bold text-blue-600">5+</h5>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div>
          <h5 className="text-3xl font-bold text-blue-600">20+</h5>
          <p className="text-gray-600">Completed Projects</p>
        </div>
        <div>
          <h5 className="text-3xl font-bold text-blue-600">10+</h5>
          <p className="text-gray-600">Technologies Mastered</p>
        </div>
      </div>

      {/* "Learn More" Button */}
      <div className="mt-12">
        <Link 
          href="/projects" // Link to another page (e.g., Portfolio)
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Learn More About My Work
        </Link>
      </div>
    </div>
  </section>
);

export default About;

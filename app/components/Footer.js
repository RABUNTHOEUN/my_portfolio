import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <div>
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
    
        {/* Quick Links Section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          
          <nav className="flex flex-col items-center md:items-start mt-2 space-y-2">
            <a href="/about" className="hover:underline">About</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
        {/* Social Media Section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold">Connect with Me</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/ra-bunthoeun-88ab7829b/" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/RABUNTHOEUN" aria-label="GitHub" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/rabunthoeun" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:rabunthoeun7777@gmail.com" aria-label="Email" className="hover:text-gray-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© 2024 Ra Bunthoeun. All rights reserved.</p>
      </div>
    </footer>
    <hr/>
  </div>
);

export default Footer;

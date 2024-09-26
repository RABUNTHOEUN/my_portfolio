// components/Header.js
const Header = () => (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#about" className="px-4 hover:underline">About</a>
          <a href="#projects" className="px-4 hover:underline">Projects</a>
          <a href="#contact" className="px-4 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  
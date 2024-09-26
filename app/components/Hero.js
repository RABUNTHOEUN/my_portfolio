// components/Hero.js
const Hero = () => (
    <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h2>
        <p className="mt-4 text-lg md:text-xl">Showcasing my work and passion for web development.</p>
        <a href="#projects" className="mt-8 inline-block bg-white text-blue-500 rounded-full px-6 py-3 font-semibold hover:bg-gray-200 transition">View Projects</a>
      </div>
    </section>
  );
  
  export default Hero;
  
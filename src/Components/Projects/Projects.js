import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', image: 'path/to/image1.jpg', link: 'http://link1.com' },
    { title: 'Project 2', image: 'path/to/image2.jpg', link: 'http://link2.com' },
    { title: 'Project 3', image: 'path/to/image3.jpg', link: 'http://link3.com' },
    // Add more projects as needed
  ];

  return (
  <div>
    <h1 className="text-4xl md:text-6xl font-bold  text-center text-white"> Projects</h1>
    <div className="grid grid-cols-3 gap-4 bg-red-700 px-6 ">
  
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
          <h2 className="mb-4 text-lg font-bold">{project.title}</h2>
          <img src={project.image} alt={project.title} className="mb-4 w-full h-64 object-cover" />
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Know More</a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
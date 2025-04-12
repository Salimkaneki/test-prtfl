'use client'
import React, { useState, useEffect } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  // Enhanced categories with icons
  const categories = [
    { id: "All", label: "All Projects", icon: "🌟" },
    { id: "Web", label: "Web Design", icon: "🎨" },
    { id: "React", label: "React Apps", icon: "⚛️" },
    { id: "UI/UX", label: "UI/UX Design", icon: "📱" },
    { id: "Mobile", label: "Mobile Apps", icon: "📲" }
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);

  // Improved project data with more metadata
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "React",
      description: "Modern admin dashboard with dark mode and real-time analytics for online stores.",
      image: "/api/placeholder/600/450",
      technologies: ["React", "TailwindCSS", "Chart.js", "Firebase"],
      featured: true,
      completionDate: "March 2025",
      link: "#"
    },
    {
      id: 2,
      title: "Travel Agency Website",
      category: "Web",
      description: "Responsive website with booking system and interactive maps for a luxury travel agency.",
      image: "/api/placeholder/600/450",
      technologies: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
      featured: true,
      completionDate: "January 2025",
      link: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile",
      description: "Secure banking application with biometric authentication and instant transactions.",
      image: "/api/placeholder/600/450",
      technologies: ["React Native", "Redux", "Node.js", "AWS"],
      featured: true,
      completionDate: "February 2025",
      link: "#"
    },
    {
      id: 4,
      title: "Healthcare Platform",
      category: "UI/UX",
      description: "User-friendly interface for patients and healthcare providers with accessibility features.",
      image: "/api/placeholder/600/450",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      featured: false,
      completionDate: "December 2024",
      link: "#"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Mobile",
      description: "Real-time tracking and smart recommendations for food delivery with payment integration.",
      image: "/api/placeholder/600/450",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      featured: true,
      completionDate: "November 2024",
      link: "#"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      category: "React",
      description: "Analytics tool for social media performance tracking with customizable reports.",
      image: "/api/placeholder/600/450",
      technologies: ["React", "Redux", "TailwindCSS", "GraphQL"],
      featured: false,
      completionDate: "October 2024",
      link: "#"
    }
  ];

  // Animation for filtering
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Handle category change with animation
  const handleCategoryChange = (category) => {
    setIsAnimating(true);
    setActiveCategory(category);
  };

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-10 -left-16 w-72 h-72 bg-indigo-50 rounded-full opacity-70 blur-lg"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-50 rounded-full opacity-30 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <p className="inline-block text-indigo-600 font-medium text-sm tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full mb-3">Portfolio Showcase</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight text-gray-900">Featured Projects</h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-10 h-1 bg-indigo-200 rounded-full"></div>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mx-2"></div>
            <div className="w-10 h-1 bg-indigo-200 rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my recent projects showcasing a range of skills and technologies.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>
        
        {/* Enhanced category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory === category.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Improved projects grid with transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Project image with enhanced overlay */}
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-indigo-100 bg-indigo-800/60 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-white/90">
                        {project.completionDate}
                      </span>
                    </div>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded shadow-md rotate-2">
                    FEATURED
                  </div>
                )}
              </div>
              
              {/* Enhanced project info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced view all projects button */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center bg-white border-2 border-indigo-600 text-indigo-600 font-medium py-3 px-8 rounded-lg hover:bg-indigo-50 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View All Projects
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
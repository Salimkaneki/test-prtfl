import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-xl">Portfolio</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#" className="hover:text-gray-500">Skills</a>
          <a href="#" className="hover:text-gray-500">Projects</a>
          <a href="#" className="hover:text-gray-500">Contact Me</a>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded-md">Hire Me</button>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Hello I am <span className="font-bold">Evran Shah.</span></h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Frontend Developer</h2>
            <p className="text-lg text-gray-600 mb-6">Based in India.</p>
            <p className="text-gray-500 mb-8 max-w-md">
              Passionate about creating beautiful and functional web experiences with clean code and modern technologies.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gray-200 rounded-lg"></div>
              <img src="/api/placeholder/400/320" alt="Developer illustration" className="relative z-10 w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "HTML", icon: "code" },
            { name: "JavaScript", icon: "box" },
            { name: "ReactJS", icon: "monitor" },
            { name: "NodeJS", icon: "server" },
            { name: "TailwindCSS", icon: "wind" },
            { name: "CSS", icon: "layout" },
            { name: "UI Design", icon: "pen-tool" },
            { name: "Figma", icon: "smartphone" },
            { name: "Git", icon: "git-branch" },
            { name: "GraphQL", icon: "database" }
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors">
              <div className="w-8 h-8 mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  {skill.icon === "code" && <polyline points="16 18 22 12 16 6"></polyline>}
                  {skill.icon === "code" && <polyline points="8 6 2 12 8 18"></polyline>}
                  {skill.icon === "box" && <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>}
                  {skill.icon === "layout" && <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>}
                  {skill.icon === "layout" && <line x1="3" y1="9" x2="21" y2="9"></line>}
                  {skill.icon === "layout" && <line x1="9" y1="21" x2="9" y2="9"></line>}
                  {skill.icon === "monitor" && <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>}
                  {skill.icon === "monitor" && <line x1="8" y1="21" x2="16" y2="21"></line>}
                  {skill.icon === "monitor" && <line x1="12" y1="17" x2="12" y2="21"></line>}
                  {skill.icon === "server" && <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>}
                  {skill.icon === "server" && <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>}
                  {skill.icon === "server" && <line x1="6" y1="6" x2="6.01" y2="6"></line>}
                  {skill.icon === "server" && <line x1="6" y1="18" x2="6.01" y2="18"></line>}
                  {skill.icon === "wind" && <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>}
                  {skill.icon === "pen-tool" && <path d="M12 19l7-7 3 3-7 7-3-3z"></path>}
                  {skill.icon === "pen-tool" && <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>}
                  {skill.icon === "pen-tool" && <path d="M2 2l7.586 7.586"></path>}
                  {skill.icon === "pen-tool" && <circle cx="11" cy="11" r="2"></circle>}
                  {skill.icon === "smartphone" && <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>}
                  {skill.icon === "smartphone" && <line x1="12" y1="18" x2="12.01" y2="18"></line>}
                  {skill.icon === "git-branch" && <line x1="6" y1="3" x2="6" y2="15"></line>}
                  {skill.icon === "git-branch" && <circle cx="18" cy="6" r="3"></circle>}
                  {skill.icon === "git-branch" && <circle cx="6" cy="18" r="3"></circle>}
                  {skill.icon === "git-branch" && <path d="M18 9a9 9 0 0 1-9 9"></path>}
                  {skill.icon === "database" && <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>}
                  {skill.icon === "database" && <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>}
                  {skill.icon === "database" && <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>}
                </svg>
              </div>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto bg-black text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">My Experience</h2>
        <div className="space-y-6">
          {[
            {
              title: "Lead Software Engineer",
              company: "ABC Company",
              period: "Jan 2022 - Present",
              description: "Led the frontend development team in building responsive web applications using React, Redux, and TailwindCSS."
            },
            {
              title: "Software Developer at XYZ LLC",
              company: "XYZ LLC",
              period: "Mar 2020 - Dec 2021",
              description: "Developed and maintained client-facing web applications, implementing modern JavaScript frameworks."
            },
            {
              title: "Junior Web Developer",
              company: "Web Solutions Inc",
              period: "Jun 2019 - Feb 2020",
              description: "Started my career building website components and learning modern web development practices."
            }
          ].map((exp, index) => (
            <div key={index} className="relative pl-8 pb-2">
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-red-500 rounded-full"></div>
              {index < 2 && <div className="absolute left-2 top-5 w-0.5 h-full bg-gray-700"></div>}
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gray-200 rounded-lg"></div>
              <img src="/api/placeholder/300/300" alt="Portrait" className="relative z-10 w-full rounded-lg" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              Hi there! I'm a passionate frontend developer with a strong foundation in modern web technologies. I specialize in creating intuitive, responsive, and accessible user interfaces.
            </p>
            <p className="text-gray-600 mb-4">
              With over 3 years of experience in the industry, I've worked on a variety of projects from small business websites to complex web applications. I'm proficient in HTML, CSS, JavaScript, and various frontend frameworks including React.
            </p>
            <p className="text-gray-600 mb-4">
              I believe in writing clean, maintainable code and following best practices. I'm always eager to learn new technologies and stay up-to-date with the latest trends in web development.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">My Projects</h2>
        <div className="space-y-12">
          {[
            {
              id: "01",
              title: "Crypto Screener Application",
              description: "A comprehensive cryptocurrency tracking application with real-time price updates, portfolio management, and customizable alerts.",
              image: "/api/placeholder/400/220"
            },
            {
              id: "02",
              title: "E-commerce Dashboard Template",
              description: "A fully responsive dashboard for e-commerce platforms with sales analytics, inventory management, and customer insights.",
              image: "/api/placeholder/400/220"
            },
            {
              id: "03",
              title: "Blog Website Template",
              description: "A modern, customizable blog template with dark/light mode, SEO optimization, and a rich text editor for content creation.",
              image: "/api/placeholder/400/220"
            }
          ].map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 order-2 md:order-none">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg">{project.id}</span>
                  <h3 className="font-bold text-xl">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="font-medium text-sm hover:underline">View Project →</button>
              </div>
              <div className="md:w-1/2">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">My Testimonial</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/50/50" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Client Name</h4>
                  <p className="text-sm text-gray-500">Position, Company</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Working with Evran was a pleasure. They delivered high-quality work on time and was responsive to feedback. I would definitely work with them again!"
              </p>
              <div className="flex mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's Talk for</h2>
        <h3 className="text-xl md:text-2xl font-bold mb-8">Something special</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">youremail@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">Evran Shah</span>
            <p className="text-gray-400 text-sm">Frontend Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Projects</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

import projectsData from "/projects.json";
import { Github, Rocket, Eye, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-teal-50 to-purple-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent">
          Projects 🎨
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          A showcase of my creative work and technical expertise
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all border-2 border-purple-100 shadow-lg hover:shadow-2xl hover:border-pink-300 group hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative w-full h-56 bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 overflow-hidden">
                {project.image ? (
                  <img
                    src={`/images/${project.image}`}
                    alt={project.title}
                    className="absolute inset-0 w-full min-h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket className="w-20 h-20 text-white/40 group-hover:scale-110 transition-transform" />
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-sm px-2 backdrop-blur rounded-full text-purple-700 border-2 border-purple-200 font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Project Title */}
                <h3 className="mb-2 text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-slate-700 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-100">
                  <h4 className="font-semibold text-purple-700 mb-2 text-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-slate-700 text-xs flex items-start gap-2">
                        <div className="w-1 h-1 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-700 mb-2 text-sm">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-pink-100 to-coral-100 text-pink-700 rounded-full border border-pink-200 hover:scale-105 transition-transform">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center text-purple-700 border-2 border-purple-100 hover:bg-purple-50 bg-transparent font-semibold px-4 py-2 rounded transition">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center text-pink-700 border-2 border-pink-100 hover:bg-pink-50 bg-transparent font-semibold px-4 py-2 rounded transition">
                    <Eye className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md border-2 border-pink-200">
            <Rocket className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              {projectsData.length - 1}+ Projects Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

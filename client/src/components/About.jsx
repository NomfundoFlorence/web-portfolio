import { Heart, Sparkles } from "lucide-react";

export default function About() {
  const skills = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node",
    "MongoDB",
    "NoSQL",
    "SQL",
    "Git",
    "Microservices",
    "Docker",
    "Containerization",
    "Cloud Native",
    "DevOps",
    "Github",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          About Me 💖
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left side - Profile Image and Stats */}
          <div className="space-y-6">
            <div className="relative w-full h-80 bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 rounded-3xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-20 h-20 text-white/30" />
                <p>Image to be uploaded soon...</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-4 text-center border-2 border-pink-200">
                <div className="text-2xl font-bold text-purple-700">1+</div>
                <div className="text-xs text-slate-600">Years Exp</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl p-4 text-center border-2 border-purple-200">
                <div className="text-2xl font-bold text-teal-700">2+</div>
                <div className="text-xs text-slate-600">Projects</div>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-pink-100 rounded-2xl p-4 text-center border-2 border-teal-200">
                <div className="text-2xl font-bold text-pink-700">100%</div>
                <div className="text-xs text-slate-600">Passion</div>
              </div>
            </div>
          </div>

          {/* Right side - About Text and Skills */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
                <p className="text-slate-700 leading-relaxed">
                  I'm a BSc in IT graduate and an Umuzi alumni with a passion
                  for turning ideas into code. My background includes experience
                  in multiple programming languages, with a primary focus on the
                  core web development technologies. I'm eager to contribute to
                  innovative projects, grow as a developer, and make my mark in
                  the ever-evolving world of tech, one line of code at a time.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100">
              <h3 className="mb-4 text-xl font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full border-2 border-pink-200 hover:scale-105 transition-transform shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

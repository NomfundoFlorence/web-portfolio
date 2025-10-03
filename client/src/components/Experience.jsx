import { Star, Briefcase, TrendingUp, Award } from "lucide-react";
import experience from "../assets/experience.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Experience 🌟
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          My professional journey and the amazing teams I've worked with
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all overflow-hidden group">
              {/* Decorative gradient bar */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-400 via-purple-500 to-teal-400"></div>

              <div className="p-8 ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    {/* Company Logo Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-200 via-purple-300 to-teal-300 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-1">
                        {job.role}
                      </h3>
                      <p className="text-lg font-semibold text-coral-600 mb-2">
                        {job.company}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <div className="bg-gradient-to-r rounded-full text-sm px-2 from-pink-100 to-purple-100 text-pink-700 border-2 border-pink-200 hover:bg-pink-100">
                          {job.period}
                        </div>
                        <div
                          variant="outline"
                          className="bg-purple-50 text-purple-700 rounded-full text-sm px-3 py-1 border border-purple-300 hover:bg-purple-100 transition-colors">
                          {job.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                  <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-slate-700 text-sm flex items-start gap-2">
                        <Star className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2 text-sm">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 rounded-full border-2 border-teal-200 hover:scale-105 transition-transform">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md border-2 border-pink-200">
            <Award className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              1+ Years of Professional Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

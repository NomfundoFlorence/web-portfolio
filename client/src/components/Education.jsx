import { Award, GraduationCap, BookOpen } from "lucide-react";
import education from "../assets/education.json";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
          Education 📚
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          My academic journey and qualifications
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400"></div>
              <div className="p-6">
                {/* Organization Icon */}
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-pink-100 via-purple-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>

                {/* Course Title */}
                <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  {edu.title}
                </h3>

                {/* Organization Name */}
                <p className="mb-2 text-lg font-semibold text-pink-600">
                  {edu.schoolName}
                </p>

                {/* Period */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="bg-gradient-to-r text-sm rounded-full px-2 from-teal-100 to-purple-100 text-teal-700 border-2 border-teal-200 hover:bg-teal-100">
                    {edu.dates}
                  </span>
                </div>

                {/* Key Coursework */}
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2 text-sm flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 text-xs font-medium bg-white text-purple-700 rounded-full border-2 border-purple-200 hover:scale-105 transition-transform">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-3 shadow-md border-2 border-pink-200">
            <GraduationCap className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              A Degree & Multiple Certifications
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-pink-100 rounded-full px-6 py-3 shadow-md border-2 border-teal-200">
            <Award className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">
              Academic Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

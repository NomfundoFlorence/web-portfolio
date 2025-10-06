import {
  Github,
  Linkedin,
  Heart,
  Sparkles,
  Star,
  Code,
  Palette,
  Zap,
  Coffee,
  FileUser,
} from "lucide-react";
import image from "/images/image05.jpg";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-300 via-purple-400 to-teal-300 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Sparkles className="absolute top-10 left-10 w-8 h-8 animate-pulse" />
        <Star className="absolute top-20 right-20 w-6 h-6 animate-pulse" />
        <Heart className="absolute bottom-20 left-1/4 w-7 h-7 animate-pulse" />
        <Sparkles className="absolute bottom-10 right-1/3 w-5 h-5 animate-pulse" />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-6">
            <div className="inline-block">
              <div className="w-36 h-36 mb-6 overflow-hidden bg-white rounded-full border-4 border-white shadow-xl">
                <img
                  src={image}
                  alt="Nomfundo smiling"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Nomfundo Mlangeni
            </h1>
            <p className="text-2xl">Junior Software Developer ✨</p>
            <p className="text-lg text-white/90 max-w-md">
              Welcome to my creative space! I'm passionate about creating
              beautiful and functional experiences accessible to everyone.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/NomfundoFlorence"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur border border-white text-white hover:bg-white hover:text-pink-600 transition-colors shadow-md">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nomfundo-mlangeni05/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur border border-white text-white hover:bg-white hover:text-purple-600 transition-colors shadow-md">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="/Nomfundo_Mlangeni_CV.pdf"
                download="Nomfundo_Mlangeni_CV.pdf"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur border border-white text-white hover:bg-white hover:text-teal-600 transition-colors shadow-md">
                <FileUser className="w-5 h-5" />
                CV/Resume
              </a>
            </div>
          </div>

          {/* Right side - Interactive Cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 shadow-2xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-3">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Clean Code</h3>
                <p className="text-sm text-white/80">
                  Writing elegant solutions
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 shadow-2xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-3">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Creative Design</h3>
                <p className="text-sm text-white/80">Beautiful interfaces</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 shadow-2xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Fast Performance</h3>
                <p className="text-sm text-white/80">Optimized experiences</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 shadow-2xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-3">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Passion Driven</h3>
                <p className="text-sm text-white/80">Love what I do</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

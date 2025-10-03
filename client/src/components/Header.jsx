import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Portfolio ✨
        </div>

        {/* Desktop Nav */}
        <nav className="hidden space-x-6 md:flex">
          {["About", "Experience", "Education", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 hover:text-pink-600 hover:font-semibold transition-colors">
                {item}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
          className="md:hidden p-2 rounded-lg text-pink-600 hover:bg-pink-50 transition-colors inline-flex items-center justify-center">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </a>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-pink-200 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {["About", "Experience", "Education", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-pink-600 transition-colors text-lg">
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

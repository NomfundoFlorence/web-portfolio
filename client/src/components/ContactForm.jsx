import axios from "axios";
import "/public/ContactForm.css";
import Validator from "validator";
import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Heart,
  Sparkles,
  Star,
  Send,
} from "lucide-react";

export default function ContactForm() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalLoading, setModalLoading] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (!formData.get("email") || !Validator.isEmail(formData.get("email"))) {
      alert("Provide valid email");
      return;
    }

    try {
      await axios.post(
        "https://web-portfolio-vd10.onrender.com/contact",
        formData
      );

      setModalLoading(true);
      setModalVisible(true);

      setTimeout(() => {
        setModalLoading(false);
      }, 5000);
    } catch (error) {
      console.error("could not send message");
      alert("Could not send message");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-pink-400 via-purple-400 to-teal-400 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Heart className="absolute top-10 right-10 w-12 h-12 animate-pulse" />
        <Sparkles className="absolute bottom-10 left-10 w-10 h-10 animate-pulse" />
        <Star className="absolute top-1/2 left-1/4 w-8 h-8 animate-pulse" />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <h2 className="mb-4 text-3xl font-bold text-center drop-shadow-lg">
          Contact Me 💌
        </h2>
        <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
          Let's create something amazing together!
        </p>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-white/90">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border-2 border-white/20 hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <p className="font-semibold">nomfundomlangeni0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border-2 border-white/20 hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">LinkedIn</p>
                  <p className="font-semibold">
                    linkedin.com/in/nomfundo-mlangeni05
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border-2 border-white/20 hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">GitHub</p>
                  <p className="font-semibold">github.com/NomfundoFlorence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl shadow-2xl border-2 border-pink-100">
            <form className="space-y-5 text-slate-700" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-slate-700 font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="px-2 py-1 rounded-xl border-2 border-pink-200 
                    focus:outline-none focus:ring-purple-400 
                    focus:border-purple-400 bg-gradient-to-r from-pink-50 to-purple-50 
                    transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-slate-700 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="px-2 py-1 rounded-xl border-2 border-pink-200 
                    focus:outline-none focus:ring-purple-400 
                    focus:border-purple-400 bg-gradient-to-r from-pink-50 to-purple-50 
                    transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-slate-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="px-4 py-1 rounded-xl border-2 border-pink-200 
                  focus:outline-none focus:ring-purple-400 
                  focus:border-purple-400 bg-gradient-to-r from-pink-50 to-purple-50 
                  transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-slate-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="px-4 py-3 rounded-xl border-2 border-pink-200 
                  focus:outline-none focus:ring-purple-400 
                  focus:border-purple-400 bg-gradient-to-r from-pink-50 to-purple-50 
                  resize-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full flex mr-auto ml-auto items-center justify-center gap-2 
                bg-gradient-to-r from-pink-500 to-purple-600 
                hover:from-pink-600 hover:to-purple-700 
                text-white rounded-xl shadow-lg h-12 text-base font-semibold 
                transition-all">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            {modalLoading ? (
              <h1>Sending email...</h1>
            ) : (
              <>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/1024px-Eo_circle_light-blue_checkmark.svg.png"
                  alt="check image"
                  className="check-image"
                />
                <h1 className="modal-message">Email sent</h1>
                <button
                  className="modal-close"
                  onClick={() => setModalVisible(false)}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

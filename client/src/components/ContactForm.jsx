import axios from "axios";
import "/public/ContactForm.css";

export default function ContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementsByClassName("contact-form")[0];
    alert("data captured");

    const formData = new FormData(form);

    console.log(formData.get("email"));

    try {
      const response = await axios.post("https://web-portfolio-vd10.onrender.com/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      alert(response.data.message)
      
    } catch (error) {
      console.error("could not send message");
    }
  }

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <label className="email-address-field">
          Email address:
          <input
            type="email"
            name="email"
            placeholder="e.g example@email.com"
            required
          />
        </label>
        <label className="subject-field">
          Subject:
          <input
            type="text"
            name="subject"
            placeholder="e.g Project collaboration"
          />
        </label>
        <label className="email-body-field">
          <textarea
            name="message"
            placeholder="Type your message here..."
            required
          />
        </label>
        <button type="submit" className="send-email-btn" onClick={handleSubmit}>
          Send email
        </button>
      </form>
    </section>
  );
}

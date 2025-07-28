import "/public/ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <label className="email-address-field">
          Email address:
          <input
            type="email"
            name="email-address"
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
            type="text"
            name="message"
            placeholder="Type your message here..."
            required
          />
        </label>
        <button type="submit" className="send-email-btn">
          Send email
        </button>
      </form>
    </section>
  );
}

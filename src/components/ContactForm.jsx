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
            placeholder="example@email.com"
          />
        </label>
        <label className="subject-field">
          Subject:
          <input
            type="text"
            name="subject"
            placeholder="Project collaboration"
          />
        </label>
        <label className="email-body-field">
          <textarea
            type="text"
            name="message"
            placeholder="Type the body of the email here..."
          />
        </label>
        <button type="submit" className="send-email-btn">
          Send email
        </button>
      </form>
    </section>
  );
}

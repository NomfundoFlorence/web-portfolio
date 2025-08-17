import axios from "axios";
import "/public/ContactForm.css";
import Validator from "validator";
import { useState } from "react";

export default function ContactForm() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalLoading, setModalLoading] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementsByClassName("contact-form")[0];
    const formData = new FormData(form);

    if (!formData.get("email") || !Validator.isEmail(formData.get("email"))) {
      alert("Provide valid email");
      return;
    }

    console.log(formData.get("email"));

    try {
      await axios.post(
        "https://web-portfolio-vd10.onrender.com/contact",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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

import React, { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";
import "../styles/Contact.scss";
import { motion, Variants } from "framer-motion";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    const formData = {
      name: (form.current.elements.namedItem("user_name") as HTMLInputElement).value,
      email: (form.current.elements.namedItem("user_email") as HTMLInputElement).value,
      message: (form.current.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mpwjevvr", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message envoyé avec succès !");
        form.current.reset();
      } else {
        setStatus("❌ Une erreur est survenue. Réessayez !");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Une erreur réseau est survenue.");
    } finally {
      setLoading(false);
    }
  };

  // Variants pour motion
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <p className="subtitle">
        Je suis disponible pour échanger, collaborer ou répondre à vos questions.
      </p>

      <div className="contact-card">
        {/* -------- Formulaire -------- */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={cardVariants}
        >
          <h3>Envoyer un message</h3>
          <input type="text" name="user_name" placeholder="Nom complet" required />
          <input type="email" name="user_email" placeholder="Adresse email" required />
          <textarea name="message" placeholder="Votre message" rows={5} required></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>
          {status && <p className="status">{status}</p>}
        </motion.form>

        {/* -------- Infos -------- */}
        <motion.div
          className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          variants={cardVariants}
        >
          <h3>Mes Coordonnées</h3>
          <div className="info-item link">
            <FaPhone className="icon" />
            <span>+261 34 89 709 47</span>
          </div>
          <div className="info-item link">
            <FaEnvelope className="icon" />
            <span>patrickmiavotra@gmail.com</span>
          </div>
          <a
            href="https://wa.me/+261348970947"
            target="_blank"
            rel="noopener noreferrer"
            className="info-item link"
          >
            <FaWhatsapp className="icon" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.facebook.com/offre.demploi.982"
            target="_blank"
            rel="noopener noreferrer"
            className="info-item link"
          >
            <FaFacebook className="icon" />
            <span>Facebook</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

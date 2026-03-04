import { useState } from "react";
import Header from "./html/header";
import Footer from "./html/footer";

/**
 * Contact form with client-side validation and success state.
 *
 * Features:
 * - Name, Email, Subject, Message fields
 * - Inline validation for required fields, email format and message length
 * - Disabled submit while "sending"
 * - Simulated send with success state (no network call)
 * - Accessible form labels and error announcements
 */

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Kontakt() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Simple email regex — good for client-side only
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  function validateField(name, value) {
    switch (name) {
      case "name":
        if (!value.trim()) return "Navn er påkrævet.";
        if (value.trim().length < 2) return "Navn skal være mindst 2 tegn.";
        return "";
      case "email":
        if (!value.trim()) return "Email er påkrævet.";
        if (!emailRegex.test(value.trim())) return "Indtast en gyldig email.";
        return "";
      case "subject":
        if (!value.trim()) return "Emne er påkrævet.";
        if (value.trim().length < 3) return "Emne skal være mindst 3 tegn.";
        return "";
      case "message":
        if (!value.trim()) return "Besked er påkrævet.";
        if (value.trim().length < 10)
          return "Beskeden skal være mindst 10 tegn.";
        return "";
      default:
        return "";
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Live-validate single field
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function validateAll() {
    const newErrors = {};
    let hasError = false;
    for (const key of Object.keys(form)) {
      const err = validateField(key, form[key]);
      newErrors[key] = err;
      if (err) hasError = true;
    }
    setErrors(newErrors);
    return !hasError;
  }

  function handleSubmit(e) {
    e.preventDefault();
    // remove previous success if resubmitting
    setSuccess(false);

    if (!validateAll()) {
      // focus first invalid field for accessibility
      const firstErrorKey = Object.keys(errors).find((k) => errors[k]);
      const target = document.querySelector(`[name="${firstErrorKey}"]`);
      if (target) target.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setForm(initialForm);
      setErrors(initialErrors);
    }, 1000);
  }

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <section className="main__kontakt" aria-labelledby="kontakt-heading">
          <h2 id="kontakt-heading" className="main__subtitle">
            Kontakt mig
          </h2>

          {success ? (
            <output
              className="kontakt__success"
              aria-live="polite"
              style={{
                padding: "1rem",
                borderRadius: "8px",
                background: "#e6ffef",
                border: "1px solid #9be6b8",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ marginBottom: "0.25rem" }}>Tak — besked sendt!</h3>
              <p style={{ margin: 0 }}>
                Jeg har modtaget din besked og vender tilbage så hurtigt som
                muligt.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                style={{
                  marginTop: "0.75rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "6px",
                  border: "none",
                  background: "#2d7a3e",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Send en ny besked
              </button>
            </output>
          ) : null}

          <form
            className="kontakt__form"
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="form-instructions"
            style={{
              display: "grid",
              gap: "0.75rem",
              maxWidth: "46rem",
            }}
          >
            <p
              id="form-instructions"
              style={{ margin: 0, marginBottom: ".5rem" }}
            >
              Udfyld formularen og jeg vender tilbage hurtigst muligt.
            </p>

            <label className="kontakt__label">
              Navn
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "error-name" : undefined}
                required
                placeholder="Dit navn"
                style={{
                  display: "block",
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: "6px",
                  border: errors.name ? "1px solid #d9534f" : "1px solid #ccc",
                  marginTop: ".25rem",
                }}
              />
              {errors.name && (
                <span
                  id="error-name"
                  role="alert"
                  style={{ color: "#d9534f", fontSize: ".9rem" }}
                >
                  {errors.name}
                </span>
              )}
            </label>

            <label className="kontakt__label">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "error-email" : undefined}
                required
                placeholder="name@domæne.dk"
                style={{
                  display: "block",
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: "6px",
                  border: errors.email ? "1px solid #d9534f" : "1px solid #ccc",
                  marginTop: ".25rem",
                }}
              />
              {errors.email && (
                <span
                  id="error-email"
                  role="alert"
                  style={{ color: "#d9534f", fontSize: ".9rem" }}
                >
                  {errors.email}
                </span>
              )}
            </label>

            <label className="kontakt__label">
              Emne
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "error-subject" : undefined}
                required
                placeholder="Hvad handler din besked om?"
                style={{
                  display: "block",
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: "6px",
                  border: errors.subject
                    ? "1px solid #d9534f"
                    : "1px solid #ccc",
                  marginTop: ".25rem",
                }}
              />
              {errors.subject && (
                <span
                  id="error-subject"
                  role="alert"
                  style={{ color: "#d9534f", fontSize: ".9rem" }}
                >
                  {errors.subject}
                </span>
              )}
            </label>

            <label className="kontakt__label">
              Besked
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "error-message" : undefined}
                required
                placeholder="Skriv din besked her..."
                style={{
                  display: "block",
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: "6px",
                  border: errors.message
                    ? "1px solid #d9534f"
                    : "1px solid #ccc",
                  marginTop: ".25rem",
                  resize: "vertical",
                }}
              />
              {errors.message && (
                <span
                  id="error-message"
                  role="alert"
                  style={{ color: "#d9534f", fontSize: ".9rem" }}
                >
                  {errors.message}
                </span>
              )}
            </label>

            <div
              style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: ".6rem 1rem",
                  borderRadius: "8px",
                  border: "none",
                  background: isSubmitting ? "#9aa4ad" : "#0b74de",
                  color: "white",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Sender..." : "Send besked"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setErrors(initialErrors);
                  setSuccess(false);
                }}
                style={{
                  padding: ".5rem .8rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                Nulstil
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

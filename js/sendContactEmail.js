function sendContactEmail() {
  const contactForm = document.getElementById("contactForm");
  const formData = new FormData(contactForm);

  new Mailform("#contactForm", {
    action: "mailto:youremail@example.com",
    fields: [
      { name: "name", value: formData.get("name") },
      { name: "email", value: formData.get("email") },
      { name: "message", value: formData.get("message") },
    ],
  }).send();

  // Clear the form after sending the email
  contactForm.reset();
}

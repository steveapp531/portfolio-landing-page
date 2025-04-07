document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form elements
  const form = e.target;
  const submitButton = document.getElementById("submitButton");
  const buttonText = document.getElementById("buttonText");
  const spinner = document.getElementById("spinner");
  const responseDiv = document.getElementById("formResponse");
  const responseText = document.getElementById("formResponseText");

  // Show loading state
  submitButton.disabled = true;
  buttonText.textContent = "Sending...";
  spinner.classList.remove("hidden");
  responseDiv.classList.add("hidden");

  try {
    // Get form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // Send to backend
    const response = await fetch(
      "https://portfolio-backend-nbac.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (response.ok) {
      // Success
      responseText.textContent = result.message || "Message sent successfully!";
      responseDiv.className =
        "mb-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      form.reset();
    } else {
      // Error from server
      responseText.textContent = result.error || "Failed to send message";
      responseDiv.className =
        "mb-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
    }
  } catch (error) {
    // Network error
    console.error("Error:", error);
    responseText.textContent = "Network error. Please try again.";
    responseDiv.className =
      "mb-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
  } finally {
    // Reset button state
    submitButton.disabled = false;
    buttonText.textContent = "Send Message";
    spinner.classList.add("hidden");
    responseDiv.classList.remove("hidden");

    // Hide message after 5 seconds
    setTimeout(() => {
      responseDiv.classList.add("hidden");
    }, 5000);
  }
});

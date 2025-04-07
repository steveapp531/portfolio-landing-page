document
  .getElementById("newsletterForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get elements
    const form = e.target;
    const emailInput = document.getElementById("newsletterEmail");
    const button = document.getElementById("subscribeButton");
    const buttonText = document.getElementById("buttonText");
    const spinner = document.getElementById("spinner");
    const responseDiv = document.getElementById("newsletterResponse");
    const responseMessage = document.getElementById("responseMessage");

    // Show loading state
    button.disabled = true;
    buttonText.textContent = "Subscribing...";
    spinner.classList.remove("hidden");
    responseDiv.classList.add("hidden");

    try {
      // Send to backend
      const response = await fetch(
        "https://portfolio-backend-nbac.onrender.com/api/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput.value,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Success
        responseMessage.textContent =
          result.message || "Thank you for subscribing!";
        responseDiv.className =
          "mt-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
        form.reset();
      } else {
        // Error from server
        responseMessage.textContent =
          result.error || "Subscription failed. Please try again.";
        responseDiv.className =
          "mt-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
      }
    } catch (error) {
      // Network error
      console.error("Error:", error);
      responseMessage.textContent =
        "Network error. Please check your connection.";
      responseDiv.className =
        "mt-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
    } finally {
      // Reset button state
      button.disabled = false;
      buttonText.textContent = "Subscribe";
      spinner.classList.add("hidden");
      responseDiv.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        responseDiv.classList.add("hidden");
      }, 5000);
    }
  });

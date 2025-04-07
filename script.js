// Event Listener for Form Validation
const form = document.getElementById("myForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission for validation

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (username === "" || email === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.className = "error";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.className = "success";
  }
});

// Event Listener for Show/Hide Text
const toggleButton = document.getElementById("toggleButton");
const toggleText = document.getElementById("toggleText");

toggleButton.addEventListener("click", () => {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
    toggleButton.textContent = "Hide Text";
  } else {
    toggleText.style.display = "none";
    toggleButton.textContent = "Show Text";
  }
});
// Responsive Menu Toggle
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Simple Form Validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Message Sent Successfully!");
  return true;
}

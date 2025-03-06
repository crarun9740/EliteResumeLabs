// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.getElementById("loginForm");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");
//   const termsCheckbox = document.getElementById("terms");

//   loginForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();
//     const termsAccepted = termsCheckbox.checked;

//     clearErrors();
//     if (!validateEmail(email)) {
//       showError(emailInput, "Please enter a valid email address");
//     }
//     if (password.length < 6) {
//       showError(passwordInput, "Password must be at least 6 characters long");
//     }
//     if (!termsAccepted) {
//       alert("Please agree to the Terms & Conditions");
//       return;
//     }

//     if (email && password.length >= 6 && termsAccepted) {
//       console.log("Login Successful!", { email, password });

//       fetch("/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success) {
//             alert("Login successful! Redirecting to the dashboard...");
//             window.location.href = "/dashboard";
//           } else {
//             alert("Login failed: " + data.message);
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("Something went wrong, please try again.");
//         });
//     }
//   });

//   function validateEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return emailPattern.test(email);
//   }

//   function showError(inputElement, message) {
//     inputElement.style.borderColor = "red";
//     const errorMessage = document.createElement("small");
//     errorMessage.classList.add("error-message");
//     errorMessage.style.color = "red";
//     errorMessage.textContent = message;
//     inputElement.parentElement.appendChild(errorMessage);
//   }

//   function clearErrors() {
//     const errorMessages = document.querySelectorAll(".error-message");
//     errorMessages.forEach((msg) => msg.remove());
//     emailInput.style.borderColor = "";
//     passwordInput.style.borderColor = "";
//   }
// });

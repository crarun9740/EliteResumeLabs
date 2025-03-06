// document.addEventListener("DOMContentLoaded", function () {
//   const signinForm = document.getElementById("signinForm");
//   const firstNameInput = document.getElementById("firstName");
//   const lastNameInput = document.getElementById("lastName");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");
//   const termsCheckbox = document.getElementById("terms");

//   signinForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     clearErrors();

//     const firstName = firstNameInput.value.trim();
//     const lastName = lastNameInput.value.trim();
//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();
//     const termsAccepted = termsCheckbox.checked;

//     let isValid = true;

//     if (firstName === "") {
//       showError(firstNameInput, "First name is required");
//       isValid = false;
//     }
//     if (lastName === "") {
//       showError(lastNameInput, "Last name is required");
//       isValid = false;
//     }
//     if (!validateEmail(email)) {
//       showError(emailInput, "Please enter a valid email address");
//       isValid = false;
//     }
//     if (password.length < 6) {
//       showError(passwordInput, "Password must be at least 6 characters long");
//       isValid = false;
//     }
//     if (!termsAccepted) {
//       alert("Please accept the Terms & Conditions to continue.");
//       isValid = false;
//     }

//     if (isValid) {
//       const formData = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         password: password,
//       };

//       fetch("/signin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success) {
//             alert("Account created successfully! Redirecting...");

//             window.location.href = "/welcome";
//           } else {
//             alert("Sign-in failed: " + data.message);
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
//     firstNameInput.style.borderColor = "";
//     lastNameInput.style.borderColor = "";
//     emailInput.style.borderColor = "";
//     passwordInput.style.borderColor = "";
//   }
// });

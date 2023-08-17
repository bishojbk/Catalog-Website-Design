const scroll = document.getElementById("btn-back-to-top");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const submit = document.getElementById("form-btn");
const dropdown = document.getElementById("dropdown");
const select = document.getElementById("resources");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    message.value == ""
  ) {
    alert("Please fill out all fields");
  } else {
    alert("Thank you for reaching out! We will get back to you soon.");
  }
});

scroll.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

dropdown.addEventListener("click", () => {
  resources.style.display = "block";
});

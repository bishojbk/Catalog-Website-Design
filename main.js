const scroll = document.getElementById("btn-back-to-top");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const submit = document.getElementById("form-btn");
const checkbox = document.getElementById("checkbox");
const dropdown = document.querySelector(".dropdown-content");
const resources = document.getElementById("dropdown-resources");
const search = document.querySelector(".nav_search");
const searchBar = document.querySelector(".search-model");
let count = 0;
search.addEventListener("click", (e) => {
  count = count + 1;

  if (!count % 2 == 0) {
    searchBar.style.display = "block";
  }

  if (count % 2 == 0) {
    searchBar.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("dropdown-resources")) {
    checkbox.checked = false;

    if (!checkbox.checked) {
      dropdown.style.display = "none";
    }
  }
});
resources.addEventListener("click", () => {
  count = count + 1;

  if (!count % 2 == 0) {
    checkbox.checked = true;
  }
  if (count % 2 == 0) {
    checkbox.checked = false;
  }

  if (checkbox.checked) {
    dropdown.style.display = "block";
  }
  if (!checkbox.checked) {
    dropdown.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    scroll.classList.add("btn-back-top");
    scroll.removeAttribute("id");
  } else {
    scroll.classList.remove("btn-back-top");
    scroll.setAttribute("id", "btn-back-to-top");
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
  document.documentElement.classList.add("scrolling");
  document.documentElement.scrollTop = 0;
});

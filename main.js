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
const hamMenu = document.querySelector(".ham-menu");
const menuItems = document.querySelector(".menu-items");
const cross = document.querySelector(".cross");

let count = false;

hamMenu.addEventListener("click", () => {
  if (!count) {
    menuItems.style.display = "block";
    count = true;
  } else {
    menuItems.style.display = "none";
    count = false;
  }
});

menuItems.addEventListener("click", (event) => {
  event.stopPropagation();
});

let searchBarVisible = false;

search.addEventListener("click", (e) => {
  if (!searchBarVisible) {
    searchBar.style.display = "block";
    searchBarVisible = true;
  } else {
    searchBar.style.display = "none";
    searchBarVisible = false;
  }
});

cross.addEventListener("click", () => {
  searchBar.style.display = "none";
  searchBarVisible = false;
});

searchBar.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dropdown-resources")) {
    checkbox.checked = false;
    resourcesVisible = false;

    if (!checkbox.checked) {
      dropdown.style.display = "none";
    }
  }
});

let resourcesVisible = false;
resources.addEventListener("click", () => {
  if (!resourcesVisible) {
    checkbox.checked = true;
    resourcesVisible = true;
  } else {
    checkbox.checked = false;
    resourcesVisible = false;
  }

  if (checkbox.checked) {
    dropdown.style.display = "block";
  }
  if (!checkbox.checked) {
    dropdown.style.display = "none";
  }
});

dropdown.addEventListener("click", (event) => {
  event.stopPropagation();
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

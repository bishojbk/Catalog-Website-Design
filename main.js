const scroll = document.getElementById("btn-back-to-top");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const submit = document.getElementById("form-btn");
const dropdown = document.querySelector(".dropdown-content");
const resources = document.getElementById("dropdown-resources");
const search = document.querySelector(".nav_search_icon");
const menuItems = document.querySelector(".menu-items");
const cross = document.querySelector(".cross");
const hamCross = document.querySelector(".ham-close");
const hamMenu = document.querySelector(".ham-menu");
const searchWrapper = document.querySelector(".search-wrapper");
const carousel = document.querySelector(".who-we-are_carousel_container");
const arrowBtnLeft = document.querySelector(".fa-angle-left");
const arrowBtnRight = document.querySelector(".fa-angle-right");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");

function calculateDistance() {
  const item1Rect = item1.getBoundingClientRect();
  const item2Rect = item2.getBoundingClientRect();
  const distance = item2Rect.left - item1Rect.left;

  arrowBtnLeft.addEventListener("click", () => {
    const scrollDistance = -distance;
    const currentScroll = carousel.scrollLeft;

    carousel.scrollTo({
      left: currentScroll + scrollDistance,
      behavior: "smooth",
    });
  });

  arrowBtnRight.addEventListener("click", () => {
    const scrollDistance = distance;
    const currentScroll = carousel.scrollLeft;

    carousel.scrollTo({
      left: currentScroll + scrollDistance,
      behavior: "smooth",
    });
  });
}
calculateDistance();

//HamMenu
hamMenu.addEventListener("click", () => {
  document.body.classList.add("mobile-nav-show");
});

hamCross.addEventListener("click", () => {
  document.body.classList.remove("mobile-nav-show");
});

//Search
search.addEventListener("click", () => {
  searchWrapper.classList.add("show");
  document.body.classList.add("no-scroll");
});

cross.addEventListener("click", () => {
  searchWrapper.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

//Dropdown
resources.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

document.addEventListener("click", function () {
  dropdown.classList.remove("show");
});

resources.addEventListener("click", (e) => {
  e.stopPropagation();
});

dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});

//Back to top
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    scroll.classList.add("btn-back-top");
    scroll.removeAttribute("id");
  } else {
    scroll.classList.remove("btn-back-top");
    scroll.setAttribute("id", "btn-back-to-top");
  }

  scroll.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//Contact
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

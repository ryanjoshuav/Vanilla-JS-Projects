// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const toggleNavBtn = () => {
  // links.classList.contains("show-links")
  //   ? links.classList.remove("show-links")
  //   : links.classList.add("show-links");

  links.classList.toggle("show-links");
};

navBtn.addEventListener("click", toggleNavBtn);

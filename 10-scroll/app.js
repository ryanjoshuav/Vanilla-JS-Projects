// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

const toggleNav = () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height.toFixed(2) + "px";

  const height = containerHeight === 0 ? linksHeight : "0";
  linksContainer.style.height = height;
  console.log(linksContainer.getBoundingClientRect().height);
};

navToggle.addEventListener("click", toggleNav);

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

const fixedNavbar = () => {
  // console.log(window.scrollY);
  const scrollHeight = window.scrollY;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
    topLink.classList.add("show-link");
  } else {
    navbar.classList.remove("fixed-nav");
    topLink.classList.remove("show-link");
  }
};

window.addEventListener("scroll", fixedNavbar);

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);

    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const isFixedNav = navbar.classList.contains("fixed-nav");
    console.log("navHeight" + navHeight);
    const element = document.getElementById(id);

    let position = element.offsetTop - navHeight;
    if (!isFixedNav) position = element.offsetTop - navHeight * 2;
    if (navHeight > 82) position += containerHeight;

    console.log("position" + position);
    window.scrollTo({ left: 0, top: position });
    linksContainer.style.height = 0;
  });
});

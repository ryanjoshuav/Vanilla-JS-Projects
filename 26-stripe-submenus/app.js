import sublinks from "./data.js";
import getElement from "./utils/getElement.js";

const initApp = () => {
  const toggleBtn = getElement(".toggle-btn");
  const closeBtn = getElement(".close-btn");
  const sidebar = getElement(".sidebar-wrapper");
  const submenu = getElement(".submenu");
  const hero = getElement(".hero");
  const nav = getElement("nav");

  toggleBtn.addEventListener("click", () => sidebar.classList.toggle("show"));
  closeBtn.addEventListener("click", () => sidebar.classList.toggle("show"));

  hero.addEventListener("mouseover", () => submenu.classList.remove("show"));
  nav.addEventListener("mouseover", (e) => {
    console.log(e.target);
    if (!e.target.classList.contains("link-btn")) {
      submenu.classList.remove("show");
    }
  });

  addLinkBtnEvents();
  renderSideBar();
};

const addLinkBtnEvents = () => {
  const linkButtons = [...document.querySelectorAll(".link-btn")];

  linkButtons.forEach((btn) => btn.addEventListener("mouseover", showSubmenu));
};

const showSubmenu = (event) => {
  const submenu = getElement(".submenu");

  const dimensions = event.target.getBoundingClientRect();
  console.log(event.target);
  const center = (dimensions.left + dimensions.right) / 2;
  const bottom = dimensions.bottom;

  const linkList = sublinks.find(
    (link) => link.page === event.target.textContent
  );
  if (linkList) {
    const { page, links } = linkList;
    submenu.classList.add("show");
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    let columns = `col-${links.length > 3 ? 4 : links.length}`;

    submenu.innerHTML = `
    <section> 
    <h4>${page}</h4>
    <div class="submenu-center ${columns}">
    ${links
      .map((link) => {
        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
      })
      .join("")}
    </div>
    </section>
    `;
  }
};

const renderSideBar = () => {
  const sidebarLinks = getElement(".sidebar-links");

  sidebarLinks.innerHTML = sublinks
    .map((subLink) => {
      const { page, links } = subLink;
      return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
      ${renderSidebarLinks(links)}
    </div>
  </article>`;
    })
    .join("");
};

const renderSidebarLinks = (links) => {
  return links
    .map((link) => {
      return `<a href="${link.url}"
        ><i class="${link.icon}"></i>${link.label}</a
      >`;
    })
    .join("");
};

document.addEventListener("DOMContentLoaded", initApp);

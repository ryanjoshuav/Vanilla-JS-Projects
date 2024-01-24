const sidebarBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const toggleSidebarBtn = () => {
  // sidebar.classList.contains("show-sidebar")
  //   ? sidebar.classList.remove("show-sidebar")
  //   : sidebar.classList.add("show-sidebar");

  sidebar.classList.toggle("show-sidebar");
};

sidebarBtn.addEventListener("click", toggleSidebarBtn);
closeBtn.addEventListener("click", toggleSidebarBtn);

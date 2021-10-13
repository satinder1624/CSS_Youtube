// Statement of Authorship (StAuth10244): I Satinder Singh, 000824885 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

window.addEventListener("load", () => {
  const menuIcon = document.getElementById("nav-items-menuIcon");
  const navId = document.getElementById("nav-items");
  if (menuIcon && navId) {
    menuIcon.addEventListener("click", () => {
      navId.classList.toggle("show-nav-items");
    });
  }
});

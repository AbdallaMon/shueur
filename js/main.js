document.addEventListener("DOMContentLoaded", async () => {
  // Toggle Drawer Menu
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".drawer .drawer-close");

  function toggleMenu() {
    console.log("clicked");
    drawer.classList.toggle("open");
    overlay.classList.toggle("open");
  }

  menuIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});

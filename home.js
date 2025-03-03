// const mobileMenuButton = document.getElementById("mobile-menu-button");
// const mobileMenu = document.getElementById("mobile-menu");
// const closeMenuButton = document.getElementById("close-menu-button");

// mobileMenuButton.addEventListener("click", () => {
//   mobileMenu.classList.remove("hidden");
//   mobileMenu.querySelector("div").classList.remove("-translate-x-full");
// });

// closeMenuButton.addEventListener("click", () => {
//   mobileMenu.querySelector("div").classList.add("-translate-x-full");
//   setTimeout(() => mobileMenu.classList.add("hidden"), 300);
// });

// mobileMenu.addEventListener("click", (e) => {
//   if (e.target === mobileMenu) {
//     closeMenuButton.click();
//   }
// }); 

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuButton = document.getElementById("close-menu-button");
  const menuPanel = mobileMenu.querySelector("div");

  if (mobileMenuButton && mobileMenu && closeMenuButton && menuPanel) {
      mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.remove("hidden");
          setTimeout(() => menuPanel.classList.remove("-translate-x-full"), 10); // Allow transition
      });

      closeMenuButton.addEventListener("click", () => {
          menuPanel.classList.add("-translate-x-full");
          setTimeout(() => mobileMenu.classList.add("hidden"), 300);
      });

      mobileMenu.addEventListener("click", (e) => {
          if (e.target === mobileMenu) {
              closeMenuButton.click();
          }
      });
  } else {
      console.error("Mobile menu elements not found.");
  }
});
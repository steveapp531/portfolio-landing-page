document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Initialize from localStorage
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
    }
    
    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
      updateThemeStatus();
    });
    
    function updateThemeStatus() {
      const isDark = html.classList.contains('dark');
      document.getElementById('sun-icon').classList.toggle('hidden', !isDark);
      document.getElementById('moon-icon').classList.toggle('hidden', isDark);
      document.getElementById('theme-status').textContent = isDark ? 'DARK' : 'LIGHT';
    }
    
    updateThemeStatus();
  });


const mobileMenuBtn = document.getElementById("mobile-menu-button");

// Create the nav menu
const navMenu = document.createElement("div");
navMenu.className = `
  absolute top-16 left-4 right-4 z-50
  bg-white/70 dark:bg-[#1a1a1a]/90
  backdrop-blur-md rounded-xl shadow-lg
  flex flex-col items-center space-y-4 px-6 py-8
  md:hidden border border-gray-200 dark:border-gray-700
  text-gray-800 dark:text-gray-200
  animate-slideDown
`;

navMenu.innerHTML = `
  <a href="./index.html" class="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300">Home</a>
  <a href="./index.html#services" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Services</a>
  <a href="./portfolio.html" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Portfolio</a>
  <a href="./blog.html" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Blog</a>
  <a href="./index.html#contact" class="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</a>
`;

// Animate with custom class
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}
`;
document.head.appendChild(styleSheet);

// Toggle visibility
let menuVisible = false;
mobileMenuBtn.addEventListener("click", () => {
  if (!menuVisible) {
    document.body.appendChild(navMenu);
    menuVisible = true;
  } else {
    navMenu.remove();
    menuVisible = false;
  }
});


console.log('Current theme:', localStorage.getItem('theme'));
console.log('Has dark class?', document.documentElement.classList.contains('dark'));



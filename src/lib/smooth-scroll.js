// Smooth scroll utility with offset for fixed navigation
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Handle navigation link clicks
export const handleNavClick = (e, href) => {
  e.preventDefault();
  
  // Check if we're on the home page
  const isHomePage = window.location.pathname === '/';
  const targetId = href.substring(1); // Remove the # from href
  
  if (isHomePage) {
    // If we're already on the home page, just scroll to the section
    smoothScrollTo(targetId);
  } else {
    // If we're on another page, navigate to the home page with the section hash
    window.location.href = `/${href}`;
  }
};

export default smoothScrollTo;

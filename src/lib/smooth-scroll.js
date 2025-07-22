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
  const targetId = href.substring(1); // Remove the # from href
  smoothScrollTo(targetId);
};

export default smoothScrollTo;

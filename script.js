document.addEventListener('DOMContentLoaded', () => {
  const activeInfo = document.querySelector('.tab-content.active') || document.querySelector('.content');
  if (!activeInfo) return;

  const isMobile = () => window.matchMedia('(max-width: 720px)').matches;
  const currentPath = location.pathname.replace(/\/$/, '');

  const isCurrentPageLink = (link) => {
    try {
      const url = new URL(link.href, location.href);
      return url.pathname.replace(/\/$/, '') === currentPath;
    } catch (error) {
      return false;
    }
  };

  const navLinks = Array.from(document.querySelectorAll('.topnav a, .sidebar-item'));
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!isMobile() || !isCurrentPageLink(link)) {
        return;
      }
      event.preventDefault();
      activeInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

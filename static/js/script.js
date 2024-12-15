
    let lastScrollY = window.scrollY;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide header
        header.classList.add('hidden');
      } else {
        // Scrolling up, show header
        header.classList.remove('hidden');
      }
      lastScrollY = window.scrollY;
    });




document.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  var scrollPosition = window.scrollY + window.innerHeight;
  var pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight) {
    footer.style.display = 'block'; // Show footer when at the bottom
  } else {
    footer.style.display = 'none'; // Hide footer when not at the bottom
  }
});
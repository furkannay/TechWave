window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var aboutimg = document.querySelector('.aboutimg');
  
    // Resmin boyutunu değiştir
    aboutimg.style.width = (42 - scrollPosition / 10) + 'vw';
    aboutimg.style.height = (32 - scrollPosition / 10) + 'vw';
  });
document.addEventListener('DOMContentLoaded', () => {
    const elementoCarousel = document.querySelectorAll('.carousel');
    // aca utilizamos el framework materialize 
    M.Carousel.init(elementoCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        opacity: 0.85,
    });
  });

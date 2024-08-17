
    let slideIndex = 0;
    let slideInterval;
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      slideInterval = setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
    
    function plusSlides(n) {
      showSlide(slideIndex += n);
    }
    
    function showSlide(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    
    function pauseSlideshow() {
      clearTimeout(slideInterval);
    }
    
    function resumeSlideshow() {
      slideInterval = setTimeout(showSlides, 2000);
    }
    
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
        plusSlides(1);
      } else if (event.key === 'ArrowLeft') {
        plusSlides(-1);
      }
    });
    
    // Attach event listeners to pause and resume the slideshow on hover
    let slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseover', pauseSlideshow);
    slideshowContainer.addEventListener('mouseout', resumeSlideshow);
    
    // Start the slideshow
    showSlides();

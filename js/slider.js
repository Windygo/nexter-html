let slideIndex = 1;

const showSlides = (n) => {

  const slides  = document.getElementsByClassName ("slider__slide");
  const dots    = document.getElementsByClassName ("slider__dot");

  console.log("The number of slides is", slides.length);

  if (n > slides.length)
    slideIndex = 1;

  if (n < 1)
    slideIndex = slides.length;

  for (let i=0; i < slides.length; i++) 
    slides[i].style.display = "none";  
    
  for (let i=0; i < dots.length; i++) 
    if (dots[i].classList.contains("active")) 
      dots[i].classList.remove("active");      
    
  
    slides[slideIndex - 1].style.display = "block";   
    dots[slideIndex - 1].classList.add("active");
  
}

const stepSlides = (n) => {
  showSlides(slideIndex = slideIndex + n)
};

const currentSlide = (n) => {
  showSlides(slideIndex = n)
};

showSlides(slideIndex);
var slideIndex = 0;
                carousel();
                
                function carousel() {
                  var i;
                  var slides = document.getElementsByClassName("careerphotos");
                  for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                  }
                  slideIndex++;
                  if (slideIndex > slides.length) {slideIndex = 1}    
                
                  slides[slideIndex-1].style.display = "block";  

                  setTimeout(carousel, 5000); 
                }

                var slideIndex2 = 0;
                carousel2();
                function carousel2() {
                  var i;
                  var slides2 = document.getElementsByClassName("artphotos");
                  for (i = 0; i < slides2.length; i++) {
                    slides2[i].style.display = "none";  
                  }
                  slideIndex2++;
                  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
                  slides2[slideIndex2-1].style.display = "block";  
                  setTimeout(carousel2, 5000); 
                }
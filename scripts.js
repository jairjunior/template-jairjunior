"use strict";


const navSlide = function(){
     const burger =  document.querySelector('.burger-button');
     const nav = document.querySelector('.navlinks');
     const navLinks = document.querySelectorAll('.navlink');

     // When click on the button burger
     // Opem navbar with animation (slinding)
     burger.addEventListener('click', () => {

          nav.classList.toggle('nav-active');

          // Navbar links animation
          navLinks.forEach( (link, index) => {
               if(link.style.animation)
                    link.style.animation = '';
               else
                    link.style.animation = 'navLinksFade 0.6s ease forwards ' + (index/7 + 0.5) + 's';
          });

          // Change the button burger into a "X" for close navbar

     })
};

navSlide();
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');


    burger.addEventListener('click', () => {
        
        //Show and Hide Nav
        nav.classList.toggle('nav-active'); 

        //Nav Links Fade Animation
        navLinks.forEach((link, index) => {

            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('clicked');
    });
};

const projectButton = document.querySelector('.hero-main a.button:first-of-type');  
const portfolioButton = document.querySelector('.hero-main a.button:last-of-type');

const toggleButtonAccent = () => {    
    //Toggle Button Accent onMouseover
    portfolioButton.addEventListener('mouseover', () => {
        projectButton.classList.toggle('button-accent');
        portfolioButton.classList.toggle('button-accent');
    });
    
    //Toggle Button Accent onMouseout
    portfolioButton.addEventListener('mouseout', () => {
        projectButton.classList.toggle('button-accent');
        portfolioButton.classList.toggle('button-accent');
    });
};

navSlide();
toggleButtonAccent();

$(document).ready(function(){

    $(".scroll a").on('click', function(event) {      
        $('html,body').animate({scrollTop: $("#body").offset().top}, 'fast');
    });
});
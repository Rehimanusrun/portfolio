/*==================toggle icon navbar=====================*/

let menuIcon= document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () =>  {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*=======================scroll section active link======================================= */

let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height ) {
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*========================sticky navbar=======================================================================*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

/*=========================remove toggle icon and navbar=====================================================================================*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*=========================scroll reveal=====================================================================================*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading',  { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal(' .skills-container', { origin: 'right' });
 ScrollReveal().reveal('.home-contact p, .about.content', { origin: 'right' });

 /*=========================Typed Js=====================================================================================*/
const typed = new Typed('.multiple-text',{
    strings: ['Full Stack Developer','Frontend Developer','Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

});


// Initialize EmailJS with your user ID
emailjs.init('c8EhEVvJIbSnCEnh3'); // Replace with your public key

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_b03razk', 'template_kk6sn2b', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('Error:', error);
            alert('Failed to send message.');
        });
});

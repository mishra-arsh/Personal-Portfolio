/*======================Show Menu===================== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*==========Menu Show================== */
/*Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*======================Menu Hidden============= */

/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*===========================Remove Menu Mobile======================= */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==========================Scroll Section Active Links=============== */

/*===========================Change Background Header================= */
function scrollHeader() {
    const header = document.getElementById('header');
    //when scroll is greater than 50 viewport height

    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============================Show Scroll zups======================= */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
   

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=====================About Tabs============================*/ 
const tabs= document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        // console.log(target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});
/*============================Contact Form========================*/

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the feild has a value

    if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        errorMessage.textContent = 'Write all the input feilds';
    }
    else{
        emailjs.sendForm('service_7bxwz7h','template_i8criwq','#contact-form','xKECJ8SPVHDJP7CVc').then(()=>{
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message Sent Successfully';

            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, 
        (error) => {

            alert('OOPs! SOMETHING WENT WRONG...', error);
        });

        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';

    }
};

contactForm.addEventListener('submit', sendEmail);
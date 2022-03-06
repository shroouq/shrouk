
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/



const elem1 = document.getElementById("section1");
const elem2 = document.getElementById("section2");
const elem3 = document.getElementById("section3");
const elem4 = document.getElementById("section4");
let elemRect1= elem1.getBoundingClientRect();
let elemRect2= elem2.getBoundingClientRect();
let elemRect3= elem3.getBoundingClientRect();
let elemRect4= elem4.getBoundingClientRect();
let y=0 ;

const posi1 = document.querySelector('.not_active1');
const posi2 = document.querySelector('.not_active2');
const posi3 = document.querySelector('.not_active3');
const posi4 = document.querySelector('.not_active4');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

  
const sections = Array.from(document.getElementsByTagName("section"));
for(let i=1; i<sections.length+1; i++){
  let newli= document.createElement('li');
  const mainheading = document.querySelector('ul');
  newli.textContent='Section'+i;
  mainheading.appendChild(newli);
  newli.className=("menu__link");
  newli.id= ("sect"+i);
  
  }

// Add class 'active' to section when near top of viewport

const header = document.querySelector('.navbar__menu');
const highlight  = header.getElementsByClassName("menu__link");
for (let i = 0; i < highlight .length; i++) {
  highlight [i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const sec1= document.querySelector('#sect1');
sec1.addEventListener('click', function() {
  let elmnt = document.getElementById("section1");
  elmnt.scrollIntoView();
  
});

const sec2= document.querySelector('#sect2');
sec2.addEventListener('click', function() {
  let elmnt = document.getElementById("section2");
  elmnt.scrollIntoView();
});

const sec3= document.querySelector('#sect3');
sec3.addEventListener('click', function() {
  let elmnt = document.getElementById("section3");
  elmnt.scrollIntoView();
});

const sec4= document.querySelector('#sect4');
sec4.addEventListener('click', function() {
  let elmnt = document.getElementById("section4");
  elmnt.scrollIntoView();
});


document.addEventListener('scroll', function() {
  y = window.scrollY;
 //console.log(y);
}
);
// Set sections as active
window.onscroll= function() {

  if (y < elemRect2.top){
    posi1.classList.replace("not_active1","active");
    posi2.classList.replace("active","not_active2");
    posi3.classList.replace("active","not_active3");
    posi4.classList.replace("active","not_active4");

    
  }
  else if (y > elemRect1.top && y < elemRect3.top)
  {
    posi1.classList.replace("active","not_active1");
    posi2.classList.replace("not_active2","active");
    posi3.classList.replace("active","not_active3");
    posi4.classList.replace("active","not_active4");
  }
  else if (y> elemRect2.top && y< elemRect4.top)
  {
    posi2.classList.replace("active","not_active2");
    posi3.classList.replace("not_active3","active");
    posi4.classList.replace("active","not_active4");
    posi1.classList.replace("active","not_active1");
  }
  else{
    posi3.classList.replace("active","not_active3");
    posi4.classList.replace("not_active4","active");
    posi2.classList.replace("active","not_active2");
    posi1.classList.replace("active","not_active1");
  }
  }
  


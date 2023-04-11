const primeNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile_nav_toggle");

//add stop-scrolling class from target element
function disableScroll() {
  
}
//remove stop-scrolling class from target element
function enableScroll() {
  
}

//disable scroll using javascript
function disableScroll() {
  // Get the current page scroll position
  scrollTop =
  window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft =
  window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
          document.body.classList.add("stop-scrolling"); //disable scrolling
      };
}

function enableScroll() {
  window.onscroll = function() {};
  document.body.classList.remove("stop-scrolling");//enable scrolling 
}

navToggle.addEventListener('click', () => {
  const visibilty = primeNav.getAttribute('data-visible');
  const isOpen = navToggle.getAttribute('aria-expanded');
   
  if (visibilty && isOpen === "false"){ 
     primeNav.setAttribute('data-visible', true);
     navToggle.setAttribute('aria-expanded', true);
     disableScroll();
  } else{
    navToggle.setAttribute('aria-expanded', false);
    primeNav.setAttribute('data-visible', 'closing');
    
    primeNav.addEventListener('animationend', () =>{
      primeNav.setAttribute('data-visible', false);
    }, {once: true})

    enableScroll();
    
  }
   
})
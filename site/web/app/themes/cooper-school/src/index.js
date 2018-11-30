import './sass/main.scss'
import MegaNav from './js/megaNav'
// import SlideNav from './js/slideNav' // Currently Inactive

// Invoke all functions on load
document.addEventListener("DOMContentLoaded",()=>{
  // Instantiate Meganav Toggler
  let megaNav = new MegaNav('mega-nav','main-nav-burger','slide-nav');

})

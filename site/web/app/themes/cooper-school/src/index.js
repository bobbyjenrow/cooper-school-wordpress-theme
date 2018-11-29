import './sass/main.scss'
import MegaNav from './js/megaNav'
import SlideNav from './js/slideNav'

// Invoke all functions on load
document.addEventListener("DOMContentLoaded",()=>{
  // Instantiate Meganav Toggler
  let megaNav = new SlideNav('mega-nav','main-nav-burger','slide-nav');

})

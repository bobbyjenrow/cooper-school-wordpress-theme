export default class SlideNav {
  constructor(navId,toggleId, slideNavId){
    this.state = {
      isCollapsed: true
    };
    // Get elements
    this.toggle = document.getElementById(toggleId);
    this.nav = document.getElementById(navId);
    this.slideNav = document.getElementById(slideNavId);
    // Initialize
    this.init();
  }
  init = ()=>{
    // Add the click event listener
    this.toggle.addEventListener('click', this.toggleCollapse);
    // Add initial collapsed classes
    this.nav.classList.add("mega-collapsed")
    this.slideNav.classList.add("slide-collapsed")
    console.log('initialized')
  }
  toggleCollapse = ()=>{
    const isSmall = ( window.innerWidth < 1000 );
    console.log(window.innerWidth);
    if (isSmall){
      console.log('toggle small')

      if(this.state.isCollapsed){
        this.state.isCollapsed = false;
        this.toggle.classList.add("is-active")
        this.slideNav.classList.remove("slide-collapsed")
      }
      else{
        this.state.isCollapsed = true;
        this.toggle.classList.remove("is-active")
        this.slideNav.classList.add("slide-collapsed")
      }
    }
    else{
      console.log('toggle lg')

      if(this.state.isCollapsed){
        this.state.isCollapsed = false;
        this.toggle.classList.add("is-active")
        this.nav.classList.remove("mega-collapsed")
      }
      else{
        this.state.isCollapsed = true;
        this.toggle.classList.remove("is-active")
        this.nav.classList.add("mega-collapsed")
      }
    }
  }
}

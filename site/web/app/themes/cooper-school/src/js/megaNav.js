export default class MegaNav {
  constructor(navId,toggleId){
    this.state = {
      isCollapsed: true
    };
    // Get elements
    this.toggle = document.getElementById(toggleId);
    this.nav = document.getElementById(navId);
    // Initialize
    this.init();
  }
  init = ()=>{
    // Add the click event listener
    this.toggle.addEventListener('click', this.toggleCollapse);
    // Add initial collapsed classes
    this.nav.classList.add("mega-collapsed")
  }
  toggleCollapse = ()=>{
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

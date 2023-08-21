let navHomepage = document.querySelector(".conteneur > .nav_homepage");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
		let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
    	navHomepage.classList.add("hidden");
    } else {
    	navHomepage.classList.remove("hidden");
    }
    lastScrollValue = top;
});
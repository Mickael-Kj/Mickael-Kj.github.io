let red = document.querySelector(".conteneur > .red");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
		let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
    	red.classList.add("hidden");
    } else {
    	red.classList.remove("hidden");
    }
    lastScrollValue = top;
});
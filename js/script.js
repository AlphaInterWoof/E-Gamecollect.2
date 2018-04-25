document.querySelectorAll("nav>ul>li").forEach(function(menu) {
    menu.addEventListener("click", mtoggle);
});

function mtoggle(e) {
  toggleClass(e.currentTarget, "show");
}

function toggleClass(el, cls) {
  var classes = el.className.split(" ");
  if (classes.includes(cls)) {
    el.className = classes.filter(c => c !== cls).join(" ");
  }
  else {
    el.className += " " + cls;
  }
}

var imageindex=0;

function changeigm(pm) {
	var images = document.querySelectorAll(".gallery > *");
	var n = images.length;
	images[imageindex % n].style.zIndex=0;
	imageindex += pm;
	images[imageindex % n].style.zIndex=1;
	
}

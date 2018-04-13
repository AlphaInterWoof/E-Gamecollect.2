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


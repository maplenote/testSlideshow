(function(){
  var o = document.body;
  o.style.webkitFilter = "blur(0.13vw)";
  o.style.filter = "blur(0.13vw)";
  o.style.opacity = "0.8";
  var l = document.createElement("div");
  l.style.position = "fixed";
  l.style.top = 0;
  l.style.left = 0;
  l.style.zIndex = 99;
  l.style.height = "100%";
  l.style.width = "100%";
  l.style.backgroundColor = "rgba(206, 235, 255, 0.3)"; //white light
  l.style.pointerEvents = "none";
  o.appendChild(l);
})();
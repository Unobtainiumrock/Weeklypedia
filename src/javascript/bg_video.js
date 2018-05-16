var vid = document.getElementById("bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{

vidFade();
}); 
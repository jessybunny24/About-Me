function scaleToFit() {
  var page = document.getElementById('page');
  var vw = window.innerWidth;
  if (vw < 1280) {
    var s = vw / 1280;
    page.style.transform = 'scale(' + s + ')';
    page.style.transformOrigin = 'top left';
    document.body.style.height = (2360 * s) + 'px';
  } else {
    page.style.transform = '';
    document.body.style.height = '';
  }
}

scaleToFit();
window.addEventListener('resize', scaleToFit);
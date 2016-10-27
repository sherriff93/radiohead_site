// var main = function(){
//    var yPos, wHeight, img, content, imgHeight, contentHeight, ratio;
//    function parallax(){
//       // Parallax scroll function. Adjusts background scrolling speed given the size of the image, so not to go past the bottom
//       yPos = window.pageYOffset;
//       wHeight = window.innerHeight;
//       img = document.getElementById('bg_image');
//       content = document.getElementById('content');
//       imgHeight = img.height;
//       contentHeight = content.clientHeight;
//       ratio = imgHeight/contentHeight;
//       img.style.top = wHeight*yPos*(1-ratio)/(contentHeight-wHeight) - yPos*ratio + 'px';
//    }
//    window.addEventListener('scroll', parallax);
// }
// $(document).ready(main);
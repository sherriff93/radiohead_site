// Replace yoffset with console.log($(window).scrollTop());
// parallax fucks up when loaded at anchor
// parallax fucks up when window resized
// fade in/out nav items
// Get rid of standrd hyperlink colors
// dont hide nav when mouse is over a single nav item
// dont make header dissapear if at the top
// hide class is wrong for nav
// conert $() to nothing
// Animate div headers as you scroll

var main = function() {
    
    var hasScrolled;
    var lastScrollTop = 0;
    var minScroll = 30; //Minimum scroll needed to hide nav
    var nav = $('#nav');
    var navItem = $('.nav_item');
    var root = $('html, body');
    var desiredOffset = null; //Target offset for scroll animations
    var onFirstHashScroll = (location.hash != ""); // See if the page has been loaded at an anchor
    var interval = 100; // Interval at which state of scrolling is checked
    var idleTime = 0; // Length of time for which the page has been idle
    var maxIdleTime = 2000; // Length of time spent idle before nav is hidden

    // Create scroll animation to scroll to a page section
    navItem.click(function() {
        // Get target href and offset
        var href = $(this).attr('href');
        desiredOffset = $(href).offset().top;

        // Scroll to target
        root.animate({
            scrollTop: $(href).offset().top
        }, 300, function() {
            // Append hash to url
            window.location.hash = href;
        });
        // Stops the nav item linking to the target, as has already scrolled there
        return false;
    });

    $(window).scroll(function(event) {
        // Update parallax scrolling
        parallax();
        scrollNav();
        // If the window is scrolling to an anchor as part of the page load, do nothing
        if (onFirstHashScroll) { 
            onFirstHashScroll = false;
        }
        // If autoscrolling and target has been reached, set to null
        else if (pageYOffset == desiredOffset || $(window).scrollTop() + $(window).height() == $(document).height()) {
            desiredOffset = null;
        }
        // Check if manually scrolling
        else if (desiredOffset == null) {
            hasScrolled = true;
        }
    });

    // Checks the state of scrolling only at specified intervals to save processing time
    // setInterval(function() {
    //     var thisScrollTop = $(this).scrollTop();

    //     handleIdleTime(thisScrollTop);

    //     // If manually scrolling
    //     if (hasScrolled) {
    //         hasScrolled = false;

    //         // Ensure they scrolled more than the minimum distance
    //         if (Math.abs(lastScrollTop - thisScrollTop) <= minScroll)
    //             return;
    //         // If they scrolled down and the page is below the nav bar, hide it
    //         if (thisScrollTop > lastScrollTop && thisScrollTop > logo.height + nav.outerHeight()) {
    //             // nav.animate({top: '-' + nav.height} + 'px');
    //             nav.addClass('hide');
    //         }
    //         // If they scrolled up, show the nav bar. Don't scroll up if past the end of the document (Such as with macs)
    //         else if (thisScrollTop + $(window).height() < $(document).height()) {
    //             // nav.animate({top: '+' + nav.height} + 'px');
    //             nav.removeClass('hide');
    //         }
    //     }
    //     lastScrollTop = thisScrollTop;
        
    // }, interval);

    function parallax() {
        // Parallax scroll function. Adjusts scrolling speed of the background image based on its size,
        // so not to go past the bottom
        var yPos = window.pageYOffset;
        var wHeight = window.innerHeight;
        var img = document.getElementById('bg_image');
        var content = document.getElementById('content');
        var imgHeight = img.height;
        var contentHeight = content.clientHeight;
        var ratio = imgHeight / contentHeight;

        // Calculate background image scroll
        img.style.top = wHeight * yPos * (1 - ratio) / (contentHeight - wHeight) - yPos * ratio + 'px';
    }

    function scrollNav() {
        var logo = document.getElementById('logo');
        var logoHeight = logo.height;
        if (window.pageYOffset >= logo.height) { nav.addClass('fixed').removeClass('absolute'); }
        else { nav.addClass('absolute').removeClass('fixed'); }

        // var thisScrollTop = $(this).scrollTop();
        // nav.css("top", "-=" + (thisScrollTop - lastScrollTop))
        // lastScrollTop = thisScrollTop;
    }

    function handleIdleTime(thisScrollTop) {
        if (idleTime >= maxIdleTime) { nav.addClass('hide'); } 
        if (lastScrollTop == thisScrollTop && thisScrollTop > logo.height + nav.outerHeight() && $('.nav_item:hover').length == 0) { idleTime += interval; }
        else { idleTime = 0; }
    }
};
$(document).ready(main);
var main = function() {

	var hasScrolled;
	var lastScrollTop = 0;
    var minScroll = 30; //Minimum scroll needed to hide nav
    var nav = $('#nav');
    var navItem = $('.nav_item');
    var root = $('html, body');
    var desiredOffset = null; //Target offset for auto-scrolling
    var onFirstHashScroll = (location.hash != ""); // See if the page has been loaded at an anchor
    var interval = 100; // Interval at which state of scrolling is checked
    var idleTime = 0; // Length of time for which the page has been idle
    var maxIdleTime = 2000; // Length of time spent idle before nav is hidden
    var headerBottom = logo.height + nav.outerHeight(); // Set header to logo plus nav height

    fadeOnScroll(); // Set initial element fade values

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
        fadeOnScroll();
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
    setInterval(function() {
    	var thisScrollTop = $(this).scrollTop();

    	handleIdleTime(thisScrollTop);

        // If manually scrolling
        if (hasScrolled) {
        	hasScrolled = false;

            // Ensure that the scroll position is past the header
            if (thisScrollTop < headerBottom) {
            	nav.removeClass('hide');
            	lastScrollTop = thisScrollTop;
            	return;
            }
            // Ensure they scrolled more than the minimum distance
            if (Math.abs(lastScrollTop - thisScrollTop) <= minScroll && isBelowNav){ return; }
            // If they scrolled down and the page is below the nav bar, hide it
            if (thisScrollTop > lastScrollTop) { nav.addClass('hide'); }
            // If they scrolled up, show the nav bar. Don't scroll up if past the end of the document (Such as with macs)
            else if (thisScrollTop + $(window).height() < $(document).height()) { nav.removeClass('hide'); }
        }
        lastScrollTop = thisScrollTop;
        
    }, interval);


    // Parallax scroll function. Adjusts scrolling speed of the background image based on its size,
    // so not to go past the bottom
    function parallax() {
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

    // Make the nav bar scroll with the window
    function scrollNav() {
    	var logo = document.getElementById('logo');
    	var logoHeight = $(logo).outerHeight();
    	var dummyNav = $('#dummy_nav');
    	if (window.pageYOffset >= logoHeight) { nav.addClass('is_fixed').removeClass('is_absolute'); }
    	else { nav.addClass('is_absolute').removeClass('is_fixed'); }
    }

    // Sets fade value for elements based on their scroll position
    function fadeOnScroll() {
    	var yPos = window.pageYOffset;
    	var wHeight = window.innerHeight;
    	var elements = $('.section');
        var opaqueHeight = 0.6; // Height at which element opacity reaches 1
        for(i = 0; i < elements.length; i++) {
        	element = $(elements[i]);
        	var ratio = (yPos + wHeight - element.offset().top)/(wHeight*opaqueHeight);
        	if (ratio >= 0 && ratio <= 1) { element.css('opacity', ratio); }
        	else { element.css('opacity', ratio >= 0); }
        }
    }

    // Checks whether to hide the nav bar based on amount of time that page is idle
    function handleIdleTime(thisScrollTop) {
        //Hide if max time spent idle exceeded
        if (idleTime >= maxIdleTime) { nav.addClass('hide'); }

        // Incremement idle time only if idle, past the header height and cursor isn't hovering on a nav item
        if (lastScrollTop == thisScrollTop && thisScrollTop > headerBottom && $('.nav_item:hover').length == 0) { idleTime += interval; }
        else { idleTime = 0; }
    }
};
$(document).ready(main);
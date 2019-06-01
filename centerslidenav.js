/* Centerslidenav 0.1.2 ( https://github.com/tightcode/centerslidenav ) */
// changed breakpoint from md to lg



/* Slidenav 4.0.0-alpha.3 ( https://github.com/tightcode/slidenav ) */

// CSS media feature is used to detect if the user has requested that the system minimize the amount of animation or motion it uses
var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
var slideSpeed = 350;

var slideSpeedInit = function () {
    if (mediaQuery.matches) {
        slideSpeed = 1;
    } else {
        slideSpeed = 350;
    }
};

window.addEventListener("load", slideSpeedInit);
mediaQuery.addListener(slideSpeedInit);

// Jquery slide effect
$('.jq-slide').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(slideSpeed);
});
$('.jq-slide').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(slideSpeed);
});

// JqueryUI slide effect
$('.jqui-slide').on('show.bs.dropdown', function() {
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(slideSpeed);
  } else {
    $(this).find('.dropdown-menu').first().stop(true, true).show("slide", {
      direction: 'up'
    }, slideSpeed);
  }
});
$('.jqui-slide').on('hide.bs.dropdown', function() {
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(slideSpeed);
  } else {
    $(this).find('.dropdown-menu').first().stop(true, true).hide("slide", {
      direction: 'up'
    }, slideSpeed);
  }
});
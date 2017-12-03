
jQuery(function($) { // DOM is now read and ready to be manipulated
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.eq-blocks');
});


$(window).resize(function(){
  equalheight('.eq-blocks');
});

});







function main() {


$(document).ready(function() {

  // init Isotope
  var $container = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',

  });

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 8; //number of items loaded on init & onclick load more button
  if ($(window).width() < 1366) {
   initShow = 6; //number of items loaded on init & onclick load more button only in less than 1366px
}
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };

  }

  //append load more button
  $container.after('<button id="load-more"> Load More</button>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

  
  
});


	/*====================================
    overlay hover effect
    ======================================*/

	$(function() {
				
	$(' .element-item .hover-bg').each( function() { $(this).hoverdir(); } );
	
	});


(function () {
   'use strict';

	/*====================================
    top -menu
    ======================================*/

$('.sidenav nav ul li:has(ul)').addClass('menu-item-has-children');

/*====================================
    text center
    ======================================*/


$(window).resize(function(){

    $('.hover-bg .hover-text .text-content').css({
        position:'relative',
        left: ($(window).width() - $('.hover-bg .hover-text .text-content').outerWidth())/0,
        top: ($(window).height() - $('.hover-bg .hover-text .text-content ').outerHeight())/6
    });
	
	 $('.single .entry-header .content, #page-banner .content').css({
        position:'relative',
       
        top: ($(window).height() - $('.entry-header .content, #page-banner .content ').outerHeight())/2
    });
	
	
   

});

// To initially run the function:
$(window).resize();



}());


}
main();
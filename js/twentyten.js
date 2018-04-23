jq2 = jQuery.noConflict();
jq2(function( $ ) {
  // infinite scrolling
  $('#container').infiniteScroll({
    path: '#nav-below .nav-previous a',
    append: '#content',
    history: false,
    hideNav: '#nav-below'
  });

  // load part of page
  var comp = new RegExp(location.host);
  $('#wrapper').on('click', 'a', function(e) {
    var clicked_url = $(this).attr('href');
    if(comp.test(clicked_url)){
      // local link clicked, do an ajax load
      e.preventDefault();
      console.log(clicked_url);
      $("#container").load(clicked_url + " #container");
    }
  })

  // toggle the menu
  var $masthead = $( '#masthead' ),
    timeout = false;

    $.fn.smallMenu = function() {
      $masthead.find( '#access' ).removeClass( 'main-navigation' ).addClass( 'main-small-navigation' );
      $masthead.find( '#access h1' ).removeClass( 'assistive-text' ).addClass( 'menu-toggle' );

      $( '.menu-toggle' ).unbind( 'click' ).click( function() {
        $masthead.find( '.menu' ).toggle();
        $( this ).toggleClass( 'toggled-on' );
      } );
    };

    // Check viewport width on first load.
    if ( $( window ).width() < 600 )
      $.fn.smallMenu();

    // Check viewport width when user resizes the browser window.
    $( window ).resize( function() {
      var browserWidth = $( window ).width();

      if ( false !== timeout )
        clearTimeout( timeout );

      timeout = setTimeout( function() {
        if ( browserWidth < 600 ) {
          $.fn.smallMenu();
        } else {
          $masthead.find( '#access' ).removeClass( 'main-small-navigation' ).addClass( 'main-navigation' );
          $masthead.find( '#access h1' ).removeClass( 'menu-toggle' ).addClass( 'assistive-text' );
          $masthead.find( '.menu' ).removeAttr( 'style' );
        }
      }, 200 );
	});
});
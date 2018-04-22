jq2 = jQuery.noConflict();
jq2(function( $ ) {
  $('#container').infiniteScroll({
    path: '#nav-below .nav-previous a',
    append: '#content',
    history: false,
  });
});
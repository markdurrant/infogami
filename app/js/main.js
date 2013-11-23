/*global $:true, console:true*/
$( document ).ready( function() {

  // title 
  var visTitle = "military spending vs gdp";
  
  // markup template
  var template = '<div class="tab left"></div><div class="face-1 left"><div class="top-1"></div><div class="content-1"></div><div class="bottom-1"></div></div><div class="face-2 left"><div class="top-2"></div><div class="content-2"></div><div class="bottom-2"></div></div><div class="face-3 left"><div class="top-3"></div><div class="content-3"></div>  <div class="bottom-3"></div></div><div class="face-4 left"><div class="top-4"></div><div class="content-4"></div><div class="bottom-4"></div></div><div class="page-break"></div>';
  
  // minimum and maximum possible sizes for faces 
  var minWidth = 65;
  var maxWidth = 117;
  var minHeight = 100;
  var maxHeight = 300;


  $.getJSON('/data/data.json', function( data ) {
    $.each( data.items, function( index, val ) {
      // create the markup
      $( '.wrap' ).append( '<div class="box-' + ( index + 1 ) + ' clear-fix">' + template + '</div>' );
      $( '.box-' + ( index + 1 ) + ' .content-1' ).append( val.name );
      $( '.box-' + ( index + 1 ) + ' .content-2' ).append( "$" + val.militarySpending + "b per year" );
      $( '.box-' + ( index + 1 ) + ' .content-3' ).append( "$" + val.gdp + " per capita");
      $( '.box-' + ( index + 1 ) + ' .content-4' ).append( visTitle );
      // style the net 
      $( '.box-' + ( index + 1 ) + ' .tab, .box-' + ( index + 1 ) + ' [class^="content"]' ).css( 'height', maxHeight );
      $( '.box-' + ( index + 1 ) + ' [class^="top"], .box-' + ( index + 1 ) + ' [class^="content"], .box-' + ( index + 1 ) + ' [class^="bottom"]' ).css( 'width', maxWidth );
      $( '.box-' + ( index + 1 ) + ' [class^="top"], .box-' + ( index + 1 ) + ' [class^="bottom"]' ).css( 'height', maxWidth );
      $( '.box-' + ( index + 1 ) + ' .tab' ).css( { 'width': maxWidth / 2, 'margin-top': maxWidth + 1 } );
    });
  });

});
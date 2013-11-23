/*global $:true, console:true*/
$( document ).ready( function() {

  var template = '<div class="tab left"></div><div class="face-1 left"><div class="top-1"></div><div class="content-1"></div><div class="bottom-1"></div></div><div class="face-2 left"><div class="top-2"></div><div class="content-2"></div><div class="bottom-2"></div></div><div class="face-3 left"><div class="top-3"></div><div class="content-3"></div>  <div class="bottom-3"></div></div><div class="face-4 left"><div class="top-4"></div><div class="content-4"></div><div class="bottom-4"></div></div>';

  var visTitle = "military spending vs gdp";

  $.getJSON('/data/data.json', function( data ) {
    $.each( data.items, function( index, val ) {
      $( '.wrap' ).append( '<div class="box-' + ( index + 1 ) + ' clear-fix">' + template + '</div>' );
      $( '.box-' + ( index + 1 ) + ' .content-1' ).append( val.name );
      $( '.box-' + ( index + 1 ) + ' .content-2' ).append( "$" + val.militarySpending + "b per year" );
      $( '.box-' + ( index + 1 ) + ' .content-3' ).append( "$" + val.gdp + " per capita");
      $( '.box-' + ( index + 1 ) + ' .content-4' ).append( visTitle );
    });
  });

});
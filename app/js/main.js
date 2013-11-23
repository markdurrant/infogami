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

  var widthDiff = maxWidth - minWidth;
  var heightDiff = maxHeight - minHeight;

  $.getJSON('/data/data.json', function( data ) {
    var AllMilitarySpending = [];
    var AllGdp = [];
    
    $.each( data.items, function( index, val ) {
      AllMilitarySpending.push( val.militarySpending );
      AllGdp.push( val.gdp );
    });

    var minGdp = _.min( AllGdp );
    var maxGdp = _.max( AllGdp );
    var gdpDiff = maxGdp - minGdp;
    var minMilitarySpending = _.min( AllMilitarySpending );
    var maxMilitarySpending = _.max( AllMilitarySpending );
    var militarySpendingDiff = maxMilitarySpending - minMilitarySpending;

    $.each( data.items, function( index, val ) {
      var itemHeight = minHeight + heightDiff * ( (val.militarySpending - minMilitarySpending) / militarySpendingDiff );
      var itemWidth = minWidth + widthDiff * ( (val.gdp - minGdp) / gdpDiff );

      // create the markup
      $( '.wrap' ).append( '<div class="box-' + ( index + 1 ) + ' clear-fix">' + template + '</div>' );
      $( '.box-' + ( index + 1 ) + ' .content-1' ).append( val.name );
      $( '.box-' + ( index + 1 ) + ' .content-2' ).append( "$" + val.militarySpending + "b per year" );
      $( '.box-' + ( index + 1 ) + ' .content-3' ).append( "$" + val.gdp + " per capita");
      $( '.box-' + ( index + 1 ) + ' .content-4' ).append( visTitle );
      // style the net 
      $( '.box-' + ( index + 1 ) + ' .tab, .box-' + ( index + 1 ) + ' [class^="content"]' ).css( 'height', itemHeight );
      $( '.box-' + ( index + 1 ) + ' [class^="top"], .box-' + ( index + 1 ) + ' [class^="content"], .box-' + ( index + 1 ) + ' [class^="bottom"]' ).css( 'width', itemWidth );
      $( '.box-' + ( index + 1 ) + ' [class^="top"], .box-' + ( index + 1 ) + ' [class^="bottom"]' ).css( 'height', itemWidth );
      $( '.box-' + ( index + 1 ) + ' .tab' ).css( { 'width': itemWidth / 2, 'margin-top': itemWidth + 1 } );
    });
  });
});
// });data.items[0].militarySpending, data.items[1].militarySpending, data.items[2].militarySpending, data.items[3].militarySpending, data.items[4].militarySpending 
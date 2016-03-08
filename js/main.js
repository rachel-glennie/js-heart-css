var $h1 = $('h1');
var $header = $('header');
var $main = $('main');
var $h2 = $('h2');
var $img = $('img');
var $dl = $('dl');
var $dt = $('dt');
var $firstP = $('main p:first-child');
var $mainUl = $('main ul');

$header.addClass('masthead');

$h1.removeClass('bigheading').addClass('logo');

$main.addClass('wrapper');

$firstP.addClass('intro');

$h2.addClass('slug-head');

$mainUl.addClass('slug-list');

$img.addClass('slug-img');

$('ul li:first-child').addClass('slug-list-first');

$('ul li:last-child').addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('big-label');

$('ul li:last-child').show();

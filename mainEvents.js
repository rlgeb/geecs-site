
$(document).ready(function () {
  checkBrowser();
});

function checkBrowser(){

	if($.browser.webkit && !window.chrome){
		alert('You\'re using Safari so the scrolling on our pages is not supported.  Try Chrome, Firefox, or IE if you have one. Otherwise download a better browser :) ');
	}
	return;
  
}

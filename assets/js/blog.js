mediumZoom('img');

jQuery(document).ready(function ($) {
	$('a')
		.filter('[href^="http"], [href^="//"]')
		.not('[href*="' + window.location.host + '"]')
		.attr('rel', 'noopener noreferrer')
		.attr('target', '_blank');
});
// $("img").hover(
// 	function(){
// 		$("body").addClass("dark");
// 	},
// 	function(){
// 		$("body").removeClass("dark");
// 	}
// )
jQuery(document).ready(function ($) {
	$('a')
		.filter('[href^="http"], [href^="//"]')
		.not('[href*="' + window.location.host + '"]')
		.attr('rel', 'noopener noreferrer')
		.attr('target', '_blank');
});

mediumZoom('img:not(.emoji)');

$(".code_title").click(function () {
	// $(".code_title > button").click(function () {

	// $(this).parents().next('.highlighter-rouge').find('.code').hide();

	// var _data = $(this).parents().next('.highlighter-rouge').find('.code').get(0);

	window.getSelection().removeAllRanges();
	var _data = $(this).next('.highlighter-rouge').find('code').get(0);
	var range = document.createRange();
	range.selectNode(_data);
	window.getSelection().addRange(range);
	document.execCommand("Copy");
	alert("code copied");
	window.getSelection().removeAllRanges();
});
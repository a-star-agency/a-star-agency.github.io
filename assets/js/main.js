/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {
	$('.thumbnails').each(function() {
		var totalHeight = 0;
		var countElements = 0;

		console.log('Height');
		$(this).find('.card').each(function() {
			if (!$(this).hasClass('screenshot')) {
				var height = $(this).height();
				totalHeight += height;
				++countElements;
			}
		});

		console.log('compute');
		console.log(totalHeight / countElements);
		$(this).find('.card').height(totalHeight / countElements);
	});
});
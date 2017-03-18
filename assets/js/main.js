/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {
	$('.thumbnails').each(function() {
		var max = 0;

		console.log('Height');
		$(this).find('.card').each(function() {
			var height = $(this).height();

			if (height > max && !$(this).hasClass('screenshot')) {
				max = height;
			}
		});

		$(this).find('.card.screenshot').height(max);
	});
});
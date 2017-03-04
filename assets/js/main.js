/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {
	$('article').animate({
		opacity: 1
	}, 1000);

	$('.thumbnails').each(function() {
		var max = 0;

		$(this).find('.card').each(function() {
			var height = $(this).height();

			if (height > max) {
				max = height;
			}
		});

		$(this).find('.card').height(max);
	});
});
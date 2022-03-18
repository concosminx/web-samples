;(function($) {
	
	$.addEventListener('DOMContentLoaded', function() {
		
		var canvas = Raphael(0, 0, 300, 300),
			rect = canvas.rect(0, 0, 20, 20).attr('fill', '#F00');
			
		rect.animate({
			"0%": { x: 0, y: 0, easing: 'bounce' },
			"25%": { x: 280, y: 0, easing: '>' },
			"50%": { x: 280, y: 280, easing: '<' },
			"75%": { x: 0, y: 280, easing: '<>' },
			"100%": { x: 0, y: 0, easing: 'bounce' }
		}, 4000);
		
	}, false);

}(document));
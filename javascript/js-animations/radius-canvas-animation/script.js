;(function($) {
	
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
	
	$.addEventListener('DOMContentLoaded', function() {
		
		var body = $.getElementsByTagName('body')[0],
			canvas = $.createElement('canvas'),
			c = canvas.getContext('2d'),
			x = 0,
			y = 0,
			angle = 0,
			radius = (canvas.width / 2) - 20;
			
		canvas.width = 300;
		canvas.height = 300;
		
		body.appendChild(canvas);
		
		update();
		
		function update() {
			
			angle += 0.02;
			
			c.fillStyle = '#000';
			c.fillRect(0, 0, canvas.width, canvas.height);
			
			x = ((canvas.width - 20) / 2) + Math.sin(angle) * radius;
			y = ((canvas.height - 20) / 2) + Math.cos(angle) * radius;
			
			c.fillStyle = '#F00';
			c.fillRect(x, y, 20, 20);
			
			requestAnimFrame(update);

		}
		
	}, false);

}(document));
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
			renderer = new THREE.WebGLRenderer(),
			scene = new THREE.Scene(),
			angle = 45,
			width = 500,
			height = 300,
			aspect = width / height,
			near = 0.1,
			far = 10000,
			camera = new THREE.PerspectiveCamera(angle, aspect, near, far),
			cube = new THREE.CubeGeometry(100, 100, 100),
			mat = new THREE.MeshBasicMaterial(new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })),
			mesh = new THREE.Mesh(cube, mat),
			vx = 2;
			
		scene.add(mesh);
			
		scene.add(camera);
		
		camera.position.z = 300;
			
		renderer.setSize(width, height);
		
		body.appendChild(renderer.domElement);
		
		update();
		
		function render() {
			
			renderer.render(scene, camera);

		}
		
		function update() {
			
			render();
			
			if ((mesh.position.x > (width / 2) - 100) || (mesh.position.x < ((width / 2) * -1) + 100)) {
				vx *= -1;
			}
			
			mesh.position.x += vx;
			
			mesh.rotation.x += 0.02;
			
			requestAnimFrame(update);

		}
		
	}, false);

}(document));
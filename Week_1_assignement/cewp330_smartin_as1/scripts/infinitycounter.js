// $(document).ready(function() {
// 	'use strict';
// 	console.log('main.js loaded');
// 	console.log('exercice 1');
// 	paper.install(window);
// 	paper.setup(document.getElementById('Canvas1'));
// 	var c = Shape.Circle(200, 200, 50);
// 	c.fillColor = 'green';
// 	paper.view.draw();
// });

// $(document).ready(function() {
// 	'use strict';
// 	console.log('exercice 2');
// 	paper.install(window);
// 	paper.setup(document.getElementById('Canvas2'));
// 	var d = Shape.Circle(200, 200, 50);
// 	d.fillColor = 'orange';
// 	paper.view.draw();
// });

// $(document).ready(function() {
// 	'use strict';
// 	console.log('exercice 3');
// 	paper.install(window);
// 	paper.setup(document.getElementById('Canvas3'));
// 	var e;
// 	for(var x=25; x<400; x+=80) {
// 		for(var y=25; y<400; y+=80) {
// 		e = Shape.Circle(x, y, 20);
// 		e.fillColor = 'blue';
// 		}
// 	}
// 	paper.view.draw();
// });

function func1(){
	console.log('exercice 4');
	paper.install(window);
	paper.setup(document.getElementById('Canvas4'));
	var tool = new Tool();
	tool.onMouseDown = function(event) {
		var f = Shape.Circle(event.point.x, event.point.y, 20);
		f.fillColor = 'purple';
		
	}
paper.view.draw();
}

function func2(){
	console.log('exercice 5');
	paper.install(window);
	// paper.setup(document.getElementById('Canvas5'));
	// var g = Shape.Circle (200, 200, 80);
	// g.fillColor = 'black';
	// var text = new PointText (200,200);
	// text.justification = 'center';
	// text.fillColor = 'white';
	// text.fontSize = 20;
	// text.content = 'hello world';
}

$(document).ready(function(){
	func1();
	func2();
});

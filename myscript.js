var canvas = oCanvas.create({
	canvas: "#canvas",
	width: 197,
	height: 256,
	fps:60
});


cnv=document.getElementById("canvas");

var box = canvas.display.rectangle({
	x:canvas.width/2,
	y:canvas.height/2,
	origin: {x: "center", y: "center"},
	width: 197,
	height: 300,


});
var pic= canvas.display.image({
	x:0,
	y:0,
	origin: {x: "center", y: "top"},
	width: 197,
	height: 256,
	fill: "#079",
	image: "cherry.jpeg",
	join: "round",
	rotation:0,
	opacity:0.5

});
var pic2= canvas.display.image({
	x:0,
	y:-256,
	origin: {x: "center", y: "top"},
	width: 197,
	height: 256,
	fill: "#079",
	image: "cherry.jpeg",
	join: "round",
	rotation:0,
	opacity:1

});

box.addChild(pic);
box.addChild(pic2);
canvas.addChild(box);

canvas.setLoop(function(){	
	pic.y+=10;
	pic2.y+=10;
	if (pic.y>256){pic.y=-256;}
	if (pic2.y>256){pic2.y=-256;}
	/*for (var i=0; i<10;i++){ 
	blur[i].rotation+=10;
	blur[i].opacity=i/100;
	}
*/
}).start();




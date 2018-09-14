'use strict';

let ctx;
let cvWidth;
let cvHeight;

let gears = [];

const bgColor = 'hsl(250, 0%, 10%)';

function draw() {
	requestAnimationFrame(draw);

	ctx.clearRect(0, 0, cvWidth, cvHeight);
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, cvWidth, cvHeight);

	gears.forEach(g => {
		g.draw(ctx);
	});
}

function init() {
	console.log('init');
	var canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');
	cvWidth = canvas.width;
	cvHeight = canvas.height;
	gears.push(new Gear(40, 30, 2, 0.14, false, 0.5, {h:10,s:40,l:40}));
	gears.push(new Gear(110, 60, 4, 0, true, 0.5, {h:40,s:40,l:40}));
	gears.push(new Gear(230, 100, 6, 0.14, false, 0.5, {h:90,s:40,l:40}));
	gears.push(new Gear(220, 212, 3, 0.18, true, 0.5, {h:120,s:40,l:40}));
	gears.push(new Gear(320, 350, 10, 0.15, false, 0.5, {h:150,s:40,l:40}));
	gears.push(new Gear(105, 370, 7, 0, true, 0.5, {h:190,s:40,l:40}));
	gears.push(new Gear(70, 220, 5, 0.1, false, 0.5, {h:220,s:40,l:40}));
	gears.push(new Gear(40, 135, 2, 0.9, true, 0.5, {h:250,s:40,l:40}));

	let slider = document.getElementById('speedRange');

	slider.oninput = function() {
		gears.forEach(gear => {
			gear.setSpeed(slider.value / 100);
		});
	};

	var slider2 = document.getElementById('colorRange');
	slider2.oninput = function() {
		gears.forEach(gear => {
			gear.updateSL(slider2.value);
		});
	};
	draw();
}

window.onload = function() {
	init();
};

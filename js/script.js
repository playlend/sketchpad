$(document).ready(function() {
	var heightWidth = 100;
	var squareWidth = 10;
	var squareHeight = 10;
	var num = 1;

	// function for creating a container
	createContainer(heightWidth);
	// func for filling container
	fillContainer(heightWidth, squareWidth, squareHeight, num);

	$("#create").click(function() {
		heightWidth = prompt("Please, enter width or height: ");
		$("#box").empty();
		createContainer(heightWidth);
		num = heightWidth/100;
		fillContainer(heightWidth, squareWidth, squareHeight, num);		
		hoverOver();
	});

	$("#clear").click(function() {
		$("#box").empty();
	});

	// hover over function
	hoverOver();

});

function createContainer(heightWidth) {
	$("#box").append("<div id='container'></div>");
	$("#container").height(heightWidth + "px").width(heightWidth + "px").css("border", "1px solid black");
	$("#container").css("margin", "0 auto").css("margin-top", "10px");
	
}

function fillContainer(heightWidth, squareWidth, squareHeight, num) {
	for(var i=1; i<=heightWidth*num; i++) {
		$("#container").append("<div class='square'></div>");
		
	}
	$(".square").height(squareHeight + "px").width(squareWidth + "px");
	$(".square").css("float", "left").css("background-color", "red");
}

function hoverOver() {
	$(".square").hover(function() {
		$(this).css("background-color", "black");
	});
}
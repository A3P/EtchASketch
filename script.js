
$(document).ready(function() {

	setGrid();

	$('#reset').click( function() {
		$("#container").remove();
		$("body").append("<div id='container'></div>")
		setGrid();
	});

	$('.line').mouseenter(function() {
		$(this).addClass('color'); 
	})
});

function setGrid() {
	var Horizontal = prompt("Enter the number of horizontal rows");
	var Vertical = prompt("Enter the number of vertical rows");

	for (var j = 1; j <= Vertical; j++) {
		$('#container').append('<div id= "Vertical' + j + '"></div>');

		for (var i = 1; i <= Horizontal; i++) {
			$('#Vertical' + j + '').append('<div class="line"></div>');

		}
	}

	$('.line').mouseenter(function() {
		$(this).addClass('color');
	});
}
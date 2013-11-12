$('#title_1').click( function() {
	if ($('#dt_1_child').hasClass('show_false')) {
		$('#dt_1_child').removeClass('show_false');		
		$('#dt_1_child').animate({height: "70px",
			opacity: 1}, 1000);
	}
	else {
		$('#dt_1_child').animate({height: "0px",
			opacity: 0}, 1000);
		$('#dt_1_child').addClass('show_false');
	}
	
});

$('#title_2').click( function() {
	if ($('#dt_2_child').hasClass('show_false')) {
		$('#dt_2_child').removeClass('show_false');		
		$('#dt_2_child').animate({height: "70px",
			opacity: 1}, 1000);
	}
	else {
		$('#dt_2_child').animate({height: "0px",
			opacity: 0}, 1000);
		$('#dt_2_child').addClass('show_false');
	}
});

$('#title_3').click( function() {
	if ($('#dt_3_child').hasClass('show_false')) {
		$('#dt_3_child').removeClass('show_false');		
		$('#dt_3_child').animate({height: "70px",
			opacity: 1}, 1000);
	}
	else {
		$('#dt_3_child').animate({height: "0px",
			opacity: 0}, 1000);
		$('#dt_3_child').addClass('show_false');
	}
});
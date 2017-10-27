$(document).ready(function () {
	var sum = 0
	$(".num_serv").each( function () {
		var service = parseInt($(this).html());
		sum += service;
	});
	$(".summary").text(sum);

	$(".content__table__row").each( function () {
		var service = parseInt($(this).find(".num_serv").html());
		var width = (service*100)/sum;
		$(this).find("span").css("width", width + "%")
	});

	$("form").submit( function (e) {
		e.preventDefault();
		var text = $(this).find("textarea").val();
		$.date = function() {
			return new Date().toLocaleString();
		};
		var time = $.date();

		var message = "\
		<div class='reviews__bl'> \
		<div class='review__bl__head'>\
		<span class='reviews__bl__name'>\
		Самуил\
		</span>\
		<span class='reviews__bl__date'>\
		" + time + "\
		</span>\
		</div>\
		<div class='reviews__bl__text'>\
		" + text + "\
		</div>\
		</div>\
		";
		if( text !== "") {
			$(".reviews").append(message)
			$(this).find("textarea").val("");
		} else {
			$(".error").fadeIn();
		}

	});
	$("form textarea").keyup( function () {
		$(".error").fadeOut('fast');
	});
});
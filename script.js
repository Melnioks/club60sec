
		//google map

		function mapaStart() {
			var wspolrzednie = new google.maps.LatLng(54.350089,18.649401);
			var opcjeMapy = {
				zoom: 15,
				center: wspolrzednie,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy);
			var punkt = new google.maps.LatLng(54.350089,18.649401);
			var image = 'owl.png';
			var opcjeMarkera = {
				position: punkt,
				map: mapa,
				icon: image,
				title: "60 секунд Гданьск"
			};
			
			var marker = new google.maps.Marker(opcjeMarkera);
		}

//slider

$(document).ready(function() {

	var speed = 100; //speed of slide changing
	var autoswitch = true; //ability to change slides automaticaly
	var autoswitchSpeed = 3000; //time for slides changing

	//add active class to the first slide

	$(".slide").first().addClass('active');

	//hidding all slides

	$(".slide").hide();

	//showing the active slide

	$(".active").show();

//autoswitching

	if (autoswitch) {
		var autoplay = setInterval(nextSlide, autoswitchSpeed);
	}

	function nextSlide() {
		$(".active").removeClass('active').addClass('oldActive');
		if ($(".oldActive").is(":last-child")) {
			$(".slide").first().addClass('active');
		}
		$(".oldActive").next().addClass('active');
		$(".oldActive").removeClass('oldActive');
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
	function prevSlide() {
		$(".active").removeClass('active').addClass('oldActive');
		if ($(".oldActive").is(":first-child")) {
			$(".slide").last().addClass('active');
		}
		$(".oldActive").prev().addClass('active');
		$(".oldActive").removeClass('oldActive');
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}

	$("#next").click(function() {
		clearInterval(autoplay);
		nextSlide();
	});

	$("#prev").click(function() {
		clearInterval(autoplay);
		prevSlide();
	});

});
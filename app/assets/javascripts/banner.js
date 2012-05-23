$(document).ready(function(){



	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-26555091-1']);
	  _gaq.push(['_trackPageview']);
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();



	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) {return;}
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=250647338304374";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	$(function(){
		$('#slidorion').slidorion({
			effect: 'slideRandom',
			hoverPause: true,
			interval: 2000,
			speed: 800
		});

		$(window).scroll(function(){
			$el = $('#download-box');
			if ($(this).scrollTop() > 540 && $el.css('position') != 'fixed'){
				$('#download-box').css({'position': 'fixed', 'top': '10px'});
			}else if($(this).scrollTop() < 540 && $el.css('position') == 'fixed'){
				$('#download-box').css({'position': 'absolute', 'top': '10px'});
			}
		});
	});
	function trackDownload(){_gaq.push(['_trackPageview', '/downloads/slidorion']);}

});

// Minimized Facebook Like Button SDK loader using jQuery
import $ from 'jquery'

(function($){
	var $b=$('.wpmozo-fb-like-embed');
	if(!$b.length)return;
	function f(){
		if(typeof FB==='undefined'&&!$('#facebook-jssdk').length){
			$('body').append('<script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0" async></script>');
		}else if(typeof FB!=='undefined'){
			FB.XFBML.parse();
		}
	}
	$(f);
})(jQuery);


/*
	require.config({
	    paths: {
	        jquery: 'jquery-1.9.1'
	    }
	});

	require(['jquery'], function($) {
		console.log($);
		
	});

*/


	require.config({
	    paths: {
	        zepto: 'zepto'
	    }
	});
	 
	require(['zepto'], function($) {
	   bindEvent($);
	});


	function bindEvent(){
		console.log($)
		document.body.addEventListener("click",function(){
			alert("click body");
		},false);
	}


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
		paths:{
			"zepto":"zepto.new"
		}
	});
	 
	require(['zepto'], function() {
	   bindEvent();
	});


	function bindEvent(){
		$("body").on("doubleTap",function(){
			console.log("this is doubleTap");
		});

		$("body").on("singleTap",function(){
			console.log("this is sinaleTap");
		});

		$("body").on("longTap",function(){
			console.log("this is longTap");
		});

		$("body").on("tap",function(){
			console.log("this is tap");
		});
	}
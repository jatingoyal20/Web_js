$.('.load').on('click',function(e)){
	var button=$(this);
	button.addClass('loading');

	window.setTimeoutfunction(){
	$.get('http://jsonplaceholder.typicode.com/posts/')
		.success(function(posts){}){
			data=posts;
			for(var i;i<posts.length;i++){
				container.append('<div>'+posts[i].title+'</div>');
			}
		}
		.error(function(){}){
			alert("vaibhav rastogi");
		}
		.always(function(){}){
			button.removeClass('loading');
		}

	}
}
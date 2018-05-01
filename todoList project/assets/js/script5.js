
//checking off 2. click is attached to ul but work with only li tag
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");	
});

//click on x to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		 $(this).remove();
	}) 
	event.stopPropagation();
});
//event bubble
$("input[type='text']").keypress(function(event){
	if(event.which==13){
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});
$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
})

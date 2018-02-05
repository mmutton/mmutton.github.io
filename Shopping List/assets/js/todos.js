//check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//click on x to delete
$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(1000,function(){
	$(this).remove();
});
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
//create new li and add to ul
	$("ul").append("<li><span><i class='fas fa-dot-circle'></i></span> " + todoText + "</li>")
	}
});

$(document).ready(function(){
 $(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(1000);
});
});